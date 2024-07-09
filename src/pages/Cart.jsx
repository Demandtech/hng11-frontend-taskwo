import { Button } from "@nextui-org/react";
import { ArrowLeftIcon, DeleteIcon } from "../components/Svgs";
import CartLayout from "../components/layout/CartLayout";
import { useNavigate, Link } from "react-router-dom";
import products from "../data";
import CartCard from "../components/cart/CartCard";

const Cart = () => {
	const navigate = useNavigate();
	return (
		<CartLayout>
			<div className="px-2 py-10 sm:px-5 md:px-20">
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
									Shopping Cart(2)
								</h3>
								<p className="border-b-2 hidden sm:block border-primary">
									Order history
								</p>
							</div>
							<Button
								startContent={<DeleteIcon />}
								className="sm:items-end text-sm sm:text-base"
							>
								Remove
							</Button>
						</div>
						<div className="mt-5 space-y-4">
							{products.map((item) => {
								return <CartCard key={item.id} item={item} />;
							})}
						</div>
					</div>
					<div className="md:col-span-1 md:mt-[60px]">
						<div className="bg-primary py-2 text-center text-white">
							Order Summary
						</div>
						<div className="mb-5 bg-white text-lg py-5 px-10 space-y-3">
							<div className="flex">
								<p className="font-semibold ">Sub-Total :</p>{" "}
								<p className="ml-auto"> ₦ 29,000.00</p>
							</div>

							<div className="flex">
								<p className="font-semibold">Coupon :</p>{" "}
								<p className="ml-auto"> - ₦ 999.00</p>
							</div>
							<div className="flex">
								<p className="font-semibold">Shipping :</p>{" "}
								<p className="ml-auto"> ₦ 2,000.00</p>
							</div>
							<div className=" flex">
								<p className="font-semibold">Total :</p>{" "}
								<span className="ml-auto"> ₦31,999.99</span>
							</div>
						</div>
						<Link
							to="/checkout"
							className="w-full block text-center py-2 bg-primary text-white"
						>
							Checkout
						</Link>
					</div>
				</div>
			</div>
		</CartLayout>
	);
};

export default Cart;
