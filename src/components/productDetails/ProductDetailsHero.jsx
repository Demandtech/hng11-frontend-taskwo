import { Button } from "@nextui-org/react";
import {
	ArrowLeftIcon,
	ArrowRightIcon,
	FilledStar,
	StrokedStar,
	ColorIcon,
	CouponIcon,
	PlusIcon,
	MinusIcon,
} from "../Svgs";
import { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { addCommas } from "../../helpers/formatPrice";
import { useNavigate } from "react-router-dom";

const ProductDetailsHero = () => {
	const { product, addItemToCart } = useAppContext();
	const [quantity, setQuantity] = useState(1);
	const [imgIndex, setImgIndex] = useState(0);
	const navigate = useNavigate();

	return (
		<div className="flex flex-col md:flex-row gap-10 pb-10">
			<div className="w-full md:w-1/2 flex flex-col gap-5">
				<div className="relative rounded-lg overflow-hidden h-[300px] md:h-[500px]">
					<img
						src={`https://api.timbu.cloud/images/${product?.photos[imgIndex]?.url}`}
						// src={mainImg}
						height="100%"
						className="w-full h-full object-cover"
					/>

					<Button
						onPress={() =>
							setImgIndex((prev) => {
								return prev > 0 ? prev - 1 : product?.photos?.length - 1;
							})
						}
						isIconOnly
						className="bg-white sm:w-14 sm:h-14 absolute bottom-5 md:bottom-14 z-10 left-5"
					>
						<ArrowLeftIcon color="#3A83A1" />
					</Button>
					<Button
						onPress={() =>
							setImgIndex((prev) => {
								return prev < product?.photos?.length - 1 ? prev + 1 : 0;
							})
						}
						isIconOnly
						className="bg-primary sm:w-14 sm:h-14 absolute bottom-5 md:bottom-14 z-10 right-5"
					>
						<ArrowRightIcon color="#ffffff" />
					</Button>
				</div>
				<div className="flex gap-2">
					{product?.photos?.map((img, index) => {
						return (
							<div
								key={img.model_id}
								onClick={() => {
									setImgIndex(index);
								}}
								className={`${
									index === imgIndex
										? " border-black90 opacity-50"
										: "border-transparent opacity-100"
								} relative !h-28 flex-1 border-2 transition-all duration-300 ease-linear rounded-md overflow-hidden`}
							>
								<img
									className="w-full !h-full object-cover object-center"
									src={`https://api.timbu.cloud/images/${img?.url}`}
								/>
							</div>
						);
					})}
				</div>
			</div>
			<div className="md:w-1/2 w-full">
				<div className="flex items-end">
					<p className="font-semibold text-[20px] md:text-4xl">
						{product?.name}
					</p>
					<p className="text-[10px] !text-black80 pb-[6px]">(in stock)</p>
				</div>
				<p className="max-w-[90%] py-2 text-base sm:text-lg text-black90 lg:text-2xl ">
					{product?.description
						? product?.description?.slice(0, 50)
						: "Elevate your culinary experience with our premium ceramic cooking pot"}
				</p>
				<div className="flex items-end gap-2">
					<div className="flex gap-[2px] pb-1 items-center">
						<FilledStar />
						<FilledStar />
						<FilledStar />
						<StrokedStar />
						<StrokedStar />
					</div>
					<p className="text-[10px] font-light  !text-grey ">
						{/* {product.review} */}
					</p>
				</div>
				<p className="text-black80 text-sm leading-5 sm:text-base md:text-lg py-2">
					{product?.description
						? product.description
						: "Elevate your culinary experience with our premium ceramic cooking pot, meticulously crafted to enhance the flavors and textures of your favorite dishes. Made from high-quality ceramic, this versatile pot combines elegance with exceptional performance, making it a must-have for every kitchen."}
				</p>
				<div className="flex items-center">
					{/* <div className="py-2 flex items-center gap-2">
						<div className="flex gap-1">
							{product.colors.map((color) => {
								return <ColorIcon key={color} color={color} />;
							})}
						</div>
						<p className="text-xs font-light  !text-grey text-start">
							Colors Available
						</p>
					</div> */}
					<Button variant="light" className="ml-auto flex items-center gap-1">
						<CouponIcon />
						<span className="text-primary text-xs">use coupon</span>
					</Button>
				</div>
				<div className="py-3 flex justify-between items-center">
					<div className="">
						<p className="text-xs font-light  !text-grey text-start">Price</p>
						<p className="text-2xl lg:text-3xl font-semibold">
							₦{addCommas(product?.current_price)}.00
						</p>
					</div>
					<div className="flex items-center">
						<span className="pr-3 text-grey text-sm">Quantity:</span>
						<Button
							onPress={() => {
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
						</Button>
						<p className="w-10 text-center">{quantity}</p>
						<Button
							onPress={() => {
								setQuantity((prev) => {
									return prev + 1;
									r;
								});
							}}
							className="bg-white"
							isIconOnly
						>
							<PlusIcon />
						</Button>
					</div>
				</div>
				<div className="flex gap-5 mt-5">
					<Button
						onPress={() =>
							addItemToCart({
								id: product?.id,
								quantity,
								price: product?.current_price,
							})
						}
						size="lg"
						className="border-2 text-primary font-normal w-full border-primary"
					>
						Add to Cart
					</Button>
					<Button
						onPress={() => {
							addItemToCart({
								id: product?.id,
								quantity,
								price: product?.current_price,
							});
							navigate("/cart");
						}}
						size="lg"
						className="bg-primary font-normal w-full text-white"
					>
						Buy Now
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ProductDetailsHero;
