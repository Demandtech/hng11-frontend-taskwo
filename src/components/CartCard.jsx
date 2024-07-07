import { useState } from "react";
import { PlusIcon, MinusIcon } from "./Svgs";
import { Button, Image } from "@nextui-org/react";

const CartCard = ({ item }) => {
	const [quantity, setQuantity] = useState(1);
	return (
		<div className="flex bg-white items-center justify-between p-5">
			<div className="flex sm:w-1/2 gap-3 sm:gap-6 ">
				<Image height={100} width={100} src={item.image} />
				<div>
					<p className="text-[15px] sm:text-base font-semibold whitespace-nowrap">
						{item.name}
					</p>
					<p className="text-[10px] sm:text-xs">{item.description}</p>
				</div>
			</div>
			<div>
				<div className="py-3">
					<div className="text-end">
						{/* <p className="text-xs font-light  !text-grey text-start">Price</p> */}
						<p className=" mb-2 sm:text-2xl font-semibold whitespace-nowrap">₦ {item.price}</p>
					</div>
					<div className="flex items-center">
						<span className="pr-2 text-grey text-[10px] sm:text-sm">
							Quantity:
						</span>
						<button
							size="sm"
							onClick={() => {
								setQuantity((prev) => {
									if (prev > 1) {
										return prev - 1;
									} else {
										return 1;
									}
								});
							}}
							className="bg-primary"
							isIconOnly
						>
							<MinusIcon />
						</button>
						<p className="w-4 sm:w-8 text-center text-[10px] sm:text-sm">
							{quantity}
						</p>
						<button
							onClick={() => {
								setQuantity((prev) => {
									return prev + 1;
								});
							}}
							className="bg-white border  border-primary"
							isIconOnly
							size="sm"
						>
							<PlusIcon />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartCard;
