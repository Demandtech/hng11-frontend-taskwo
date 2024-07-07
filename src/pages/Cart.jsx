import { Button } from "@nextui-org/react";
import { ArrowLeftIcon, DeleteIcon } from "../components/Svgs";
import CartLayout from "../components/layout/CartLayout";
import { useNavigate } from "react-router-dom";

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
				<div className="grid md:grid-cols-3">
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
					</div>
					<div className="md:col-span-1"></div>
				</div>
			</div>
		</CartLayout>
	);
};

export default Cart;
