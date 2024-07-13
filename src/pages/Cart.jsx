import { Button } from "@nextui-org/react";
import { ArrowLeftIcon, DeleteIcon } from "../components/Svgs";
import CartLayout from "../components/layout/CartLayout";
import { useNavigate, Link } from "react-router-dom";
import CartCard from "../components/cart/CartCard";
import { useAppContext } from "../context/AppContext";
import { useEffect, useState } from "react";
import { addCommas } from "../helpers/formatPrice";

const Cart = () => {
	const navigate = useNavigate();
	const { carts, removeAllCartItems } = useAppContext();
	const [subTotal, setSubTotal] = useState(0);
	const shipping = 2000;

	useEffect(() => {
		const total = carts.reduce((acc, cart) => {
			return acc + cart.price * cart.quantity;
		}, 0);

		setSubTotal(total);
	}, [carts]);

	console.log(subTotal);

	return (
		<CartLayout>
			<div
				style={{
					minHeight: `calc(100vh - 64px)`,
				}}
				className="px-2 py-10 sm:px-5 md:px-20"
			>
				<div className="mb-7 justify-between md:mb-10 flex items-center">
					<Button
						onPress={() => {
							navigate(-1);
						}}
						className="px-0 justify-start"
					>
						<ArrowLeftIcon color="black" />
						<span>Back</span>
					</Button>
					<p className="sm:hidden text-primary text-sm font-semibold">
						Order history
					</p>
				</div>
				<div className="grid lg:grid-cols-3 gap-10">
					<div className="md:col-span-2">
						<div className="flex items-center sm:items-end justify-between">
							<div className="inline-flex items-end sm:gap-3 sm:border-b border-lightgrey sm:pr-10">
								<h3 className="font-bold whitespace-nowrap text-lg md:text-3xl">
									Shopping Cart({carts?.length})
								</h3>
								<p className="border-b-2 hidden sm:block border-primary">
									Order history
								</p>
							</div>
							<Button
								onPress={removeAllCartItems}
								startContent={<DeleteIcon />}
								className="sm:items-end text-sm sm:text-base"
							>
								Remove
							</Button>
						</div>
						<div className="mt-5 space-y-4">
							{carts.length > 0 ? (
								carts.map((item) => {
									return <CartCard key={item.id} item={item} />;
								})
							) : (
								<div className="flex justify-center w-full">
									<p className="text-center text-black90 font-semibold text-2xl">
										Cart is empty
									</p>
								</div>
							)}
						</div>
					</div>
					{
						<div className="md:col-span-1 md:mt-[60px]">
							<div className="bg-primary py-2 text-center text-white">
								Order Summary
							</div>
							<div className="mb-5 bg-white text-lg py-5 px-10 space-y-3">
								<div className="flex">
									<p className="font-semibold ">Sub-Total :</p>{" "}
									<p className="ml-auto"> ₦ {addCommas(subTotal)}.00</p>
								</div>

								<div className="flex">
									<p className="font-semibold">Coupon :</p>{" "}
									<p className="ml-auto"> - ₦ 0.00</p>
								</div>
								<div className="flex">
									<p className="font-semibold">Shipping :</p>{" "}
									<p className="ml-auto">
										{" "}
										₦ {subTotal > 0 ? shipping : "0"}.00
									</p>
								</div>
								<div className=" flex">
									<p className="font-semibold">Total :</p>{" "}
									<span className="ml-auto">
										{" "}
										₦ {addCommas(subTotal > 0 ? subTotal + shipping : subTotal)}
										.00
									</span>
								</div>
							</div>
							<Link
								to="/checkout"
								className="w-full block text-center py-2 bg-primary text-white"
							>
								Checkout
							</Link>
						</div>
					}
				</div>
			</div>
		</CartLayout>
	);
};

export default Cart;
