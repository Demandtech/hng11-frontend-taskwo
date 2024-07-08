import { Image, Button } from "@nextui-org/react";
import { CartIcon, FilledStar, StrokedStar, ColorIcon } from "./Svgs";
import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {
	return (
		<div className="bg-white p-4  w-full lg:w-[370px] min-w-[300px] lg:max-w-[340px]">
			<Image width={"100%"} height={"100%"} src={data.image} alt="product" />

			<div className="pt-4">
				<div className="flex items-start  gap-4 justify-between">
					<div className="flex  items-center">
						<Link
							to={`/products/${data.id}`}
							className="font-semibold whitespace-nowrap text-lg md:text-2xl"
						>
							{data.name}
						</Link>
						<p className="text-[10px] !text-black80 whitespace-nowrap">
							(in stock)
						</p>
					</div>
					<div className="pt-2">
						<div className="flex gap-[2px] pb-1 items-center">
							<FilledStar />
							<FilledStar />
							<FilledStar />
							<StrokedStar />
							<StrokedStar />
						</div>
						<p className="text-[10px] font-light  !text-grey text-end">
							{data.review}
						</p>
					</div>
				</div>
				<p className="w-full text-sm  sm:text-base sm:w-[80%]">
					{data.description}
				</p>
				<div className="py-2 flex items-center gap-2">
					<div className="flex gap-1">
						{data.colors.map((color) => {
							return <ColorIcon key={color} color={color} />;
						})}
					</div>
					<p className="text-xs font-light  !text-grey text-start">
						Colors Available
					</p>
				</div>
				<div className="flex justify-between">
					<div>
						<p className="text-xs font-light  !text-grey text-start">Price</p>
						<p className="text-lg md:text-2xl font-semibold">₦{data.price}</p>
					</div>
					<div className="flex flex-col items-end">
						<Button isIconOnly variant="solid" className="bg-primary">
							<CartIcon color="#ffffff" />
						</Button>
						<p className="text-xs font-light  !text-primary text-end">
							Add to Cart
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
