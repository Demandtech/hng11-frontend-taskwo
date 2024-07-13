import { useState } from "react";
import { PlusIcon, MinusIcon } from "../Svgs";
import { Image } from "@nextui-org/react";
import { useAppContext } from "../../context/AppContext";
import { addCommas } from "../../helpers/formatPrice";
import { Link } from "react-router-dom";

const CartCard = ({ item }) => {
	const [quantity, setQuantity] = useState(item.quantity);
	const { addQuantityToItem, removeQuantityFromItem } = useAppContext();

	const handleAddQuantity = () => {
		addQuantityToItem(item.id);
		setQuantity((prev) => {
			return prev + 1;
		});
	};

	const handleRemoveQuantity = () => {
		removeQuantityFromItem(item.id);
		setQuantity((prev) => {
			if (prev > 1) {
				return prev - 1;
			} else {
				return 1;
			}
		});
	};
	return (
		<div className="flex bg-white items-center gap-5 justify-between p-2 sm:p-5">
			<div className="flex items-center sm:w-2/3 gap-3 sm:gap-6 ">
				<div className="w-20 h-20 rounded-md overflow-hidden">
					<img
						className="!w-full !h-full object-cover object-center"
						src={`https://api.timbu.cloud/images/${item?.photos[1]?.url}`}
					/>
				</div>
				<div>
					<Link to={`/products/${item.id}`}>
						<p className="text-[15px] sm:text-base font-semibold whitespace-nowrap">
							{item.name}
						</p>
					</Link>
					<p className="text-[10px] sm:text-xs">
						{item?.description
							? item?.description?.slice(0, 50)
							: "meticulously crafted to enhance the flavors "}
					</p>
				</div>
			</div>
			<div>
				<div className="py-3">
					<div className="text-end">
						<p className="text-xs font-light  !text-grey text-start">Price</p>
						<p className=" mb-2 sm:text-2xl font-semibold whitespace-nowrap">
							₦ {addCommas(item.price * item.quantity)}.00
						</p>
					</div>
					<div className="flex items-center">
						<span className="pr-2 text-grey text-[10px] sm:text-sm">
							Quantity:
						</span>
						<button
							className="w-5 h-5 flex justify-center items-center bg-primary"
							onClick={handleRemoveQuantity}
							// className="bg-primary"
						>
							<MinusIcon />
						</button>
						<p className="w-4 sm:w-8 text-center text-[10px] sm:text-sm">
							{quantity}
						</p>
						<button
							onClick={handleAddQuantity}
							className="bg-white border flex items-center justify-center  w-5 h-5 border-primary"
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
