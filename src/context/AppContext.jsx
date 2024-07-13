import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import toast, { toastConfig } from "react-simple-toasts";
import "react-simple-toasts/dist/theme/dark.css";

const AppContext = createContext(null);
toastConfig({ theme: "dark" });
const AppProvider = ({ children }) => {
	const [initialState, setInitialState] = useState(() => {
		const savedCarts = localStorage.getItem("CART");
		return {
			products: [],
			product: null,
			carts: savedCarts ? JSON.parse(savedCarts) : [],
			current_page: 1,
			prevPage: null,
			nextPage: null,
			totalPage: 1,
		};
	});
	// const BASE_URL = "https://api.timbu.cloud";
	const BASE_URL = import.meta.env.VITE_BASE_URL;
	const SINGLE_BASE_URL = import.meta.env.VITE_SINGLE_BASE_URL;
	const APP_ID = import.meta.env.VITE_Appid;
	const API_KEY = import.meta.env.VITE_Apikey;
	const ORGANIZATION_ID = import.meta.env.VITE_organization_id;

	const getAllProducts = async (showPage = 1) => {
		try {
			const {
				data: { items, page, previous_page, next_page, size, total, ...rest },
				status,
			} = await axios.get(
				`${BASE_URL}/api/products?organization_id=${ORGANIZATION_ID}&reverse_sort=false&page=${showPage}&size=4&Appid=${APP_ID}&Apikey=${API_KEY}`
			);

			if (status !== 200) throw new Error();

			// console.log(rest);

			setInitialState((prev) => {
				return {
					...prev,
					products: items,
					page,
					nextPage: next_page,
					prevPage: previous_page,
					totalPage: Math.ceil(total / size),
				};
			});
		} catch (error) {
			console.log(error);
		}
	};
	const getProduct = async (productId) => {
		try {
			const { data, status } = await axios.get(
				`${SINGLE_BASE_URL}/${productId}?organization_id=${ORGANIZATION_ID}&reverse_sort=false&size=10&Appid=${APP_ID}&Apikey=${API_KEY}`
			);

			if (status !== 200) throw new Error();

			console.log(data);

			setInitialState((prev) => {
				return {
					...prev,
					product: data,
				};
			});
		} catch (error) {
			console.log(error);
		}
	};

	const addItemToCart = async ({ id, quantity, price }) => {
		setInitialState((prev) => {
			const alreadyInCart = prev.carts.find((cart) => cart.id === id);

			if (alreadyInCart) {
				const newCarts = prev.carts.map((cart) =>
					cart.id === id
						? { ...cart, quantity: cart.quantity + quantity }
						: cart
				);
				return {
					...prev,
					carts: newCarts,
				};
			} else {
				const newItem = prev.products.find((product) => product.id === id);
				if (newItem) {
					newItem.quantity = quantity;
					newItem.price = price;
					return {
						...prev,
						carts: [...prev.carts, newItem],
					};
				}
			}
			return prev;
		});
		snackBar("New Item added to cart", "success");
	};

	const addQuantityToItem = async (id) => {
		setInitialState((prev) => {
			const newCarts = prev.carts.map((cart) => {
				return cart.id === id ? { ...cart, quantity: cart.quantity + 1 } : cart;
			});
			return {
				...prev,
				carts: newCarts,
			};
		});
	};

	const removeQuantityFromItem = async (id) => {
		setInitialState((prev) => {
			const newCarts = prev.carts.map((cart) => {
				return cart.id === id
					? {
							...cart,
							quantity: cart.quantity > 1 ? cart.quantity - 1 : cart.quantity,
					  }
					: cart;
			});
			return {
				...prev,
				carts: newCarts,
			};
		});
	};

	const removeAllCartItems = async () => {
		setInitialState((prev) => {
			return {
				...prev,
				carts: [],
			};
		});
		snackBar("All cart items removed", "info");
	};

	const snackBar = (message, type) => {
		toast(message, {
			position: "top-right",
			clickable: true,
			clickClosable: true,
			duration: 5000,

			render: (text) => (
				<div
					className={`"text-sm flex gap-1 items-center ${
						type === "success"
							? "bg-[#0aa700]"
							: type === "info"
							? "bg-[#ff9800]"
							: "bg-[#d3302f]"
					} p-3 rounded-md font-light text-sm text-white`}
				>
					<span>{text}</span>
				</div>
			),
		});
	};

	useEffect(() => {
		localStorage.setItem("CART", JSON.stringify(initialState.carts));
	}, [initialState]);

	return (
		<AppContext.Provider
			value={{
				...initialState,
				getAllProducts,
				getProduct,
				addItemToCart,
				addQuantityToItem,
				removeQuantityFromItem,
				removeAllCartItems,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => {
	return useContext(AppContext);
};

export default AppProvider;
