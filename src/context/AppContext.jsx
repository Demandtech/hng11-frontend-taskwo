import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import toast, { toastConfig } from "react-simple-toasts";
import "react-simple-toasts/dist/theme/dark.css";

const AppContext = createContext(null);
toastConfig({ theme: "dark" });
const AppProvider = ({ children }) => {
	const [initialState, setInitialState] = useState(() => {
		const savedState = localStorage.getItem("INITIAL-STATE");
		return savedState
			? JSON.parse(savedState)
			: {
					products: [],
					product: null,
					carts: [],
					page: 1,
					prevPage: null,
					nextPage: null,
			  };
	});
	// const BASE_URL = "https://api.timbu.cloud";
	const APP_ID = import.meta.env.VITE_Appid;
	const API_KEY = import.meta.env.VITE_Apikey;
	const ORGANIZATION_ID = import.meta.env.VITE_organization_id;

	const getAllProducts = async () => {
		try {
			const {
				data: { items, page, previous_page, next_page },
				status,
			} = await axios.get(
				`/api/products?organization_id=${ORGANIZATION_ID}&reverse_sort=false&page=${initialState.page}&size=10&Appid=${APP_ID}&Apikey=${API_KEY}`
			);

			if (status !== 200) throw new Error();

			// console.log(items);

			setInitialState((prev) => {
				return {
					...prev,
					products: items,
					page,
					nextPage: next_page,
					prevPage: previous_page,
				};
			});
		} catch (error) {
			console.log(error);
		}
	};
	const getProduct = async (productId) => {
		try {
			const { data, status } = await axios.get(
				`/api/products/${productId}?organization_id=${ORGANIZATION_ID}&reverse_sort=false&page=${initialState.page}&size=10&Appid=${APP_ID}&Apikey=${API_KEY}`
			);

			if (status !== 200) throw new Error();

			// console.log(data);

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

	const addItemToCart = async ({ id, quantity }) => {
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
							quantity: cart.quantity > 1 ? cart.quanty - 1 : cart.quanty,
					  }
					: cart;
			});
			return {
				...prev,
				carts: newCarts,
			};
		});

		snackBar("All cart items removed", "info");
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
					{/* {type === "success" ? (
						<IoMdCheckmarkCircleOutline size={20} />
					) : type === "info" ? (
						<BiSolidError size={20} />
					) : (
						<IoMdCloseCircle size={20} />
					)} */}
					<span>{text}</span>
				</div>
			),
		});
	};

	useEffect(() => {
		if (initialState) {
			localStorage.setItem("INITIAL-STATE", JSON.stringify(initialState));
		}
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
