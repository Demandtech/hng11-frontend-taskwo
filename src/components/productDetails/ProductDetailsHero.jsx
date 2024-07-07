import { Button, Image } from "@nextui-org/react";
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
import thumbnail1 from "../../assets/products/thumbnail1.png";
import thumbnail2 from "../../assets/products/thumbnail2.png";
import thumbnail3 from "../../assets/products/thumbnail3.png";
import mainImg from "../../assets/products/product-big.png";
import products from "../../data";
import { useState } from "react";

const ProductDetailsHero = () => {
	const product = products[0];
	const [quantity, setQuantity] = useState(1);
	return (
		<div className="flex flex-col md:flex-row gap-10 pb-10">
			<div className="w-full md:w-1/2 flex flex-col gap-5">
				<div className="relative overflow-hidden h-[300px] md:h-[540px]">
					<Image src={mainImg} height={"100%"} />

					<Button
						isIconOnly
						className="bg-white sm:w-14 sm:h-14 absolute bottom-5 md:bottom-14 z-10 left-5"
					>
						<ArrowLeftIcon color="#3A83A1" />
					</Button>
					<Button
						isIconOnly
						className="bg-primary sm:w-14 sm:h-14 absolute bottom-5 md:bottom-14 z-10 right-5"
					>
						<ArrowRightIcon color="#ffffff" />
					</Button>
				</div>
				<div className="flex gap-2">
					<Image src={thumbnail1} />
					<Image src={thumbnail2} />
					<Image src={thumbnail3} />
				</div>
			</div>
			<div className="md:w-1/2 w-full">
				<div className="flex items-end">
					<p className="font-semibold text-2xl md:text-4xl">{product.name}</p>
					<p className="text-[10px] !text-black80 pb-[6px]">(in stock)</p>
				</div>
				<p className="max-w-[70%] py-2 text-lg text-black90 lg:text-2xl ">
					{product.description}
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
						{product.review}
					</p>
				</div>
				<p className="text-black80 text-base md:text-lg py-2">
					Elevate your culinary experience with our premium ceramic cooking pot,
					meticulously crafted to enhance the flavors and textures of your
					favorite dishes. Made from high-quality ceramic, this versatile pot
					combines elegance with exceptional performance, making it a must-have
					for every kitchen.
				</p>
				<div className="flex items-center">
					<div className="py-2 flex items-center gap-2">
						<div className="flex gap-1">
							{product.colors.map((color) => {
								return <ColorIcon key={color} color={color} />;
							})}
						</div>
						<p className="text-xs font-light  !text-grey text-start">
							Colors Available
						</p>
					</div>
					<Button variant="light" className="ml-auto flex items-center gap-1">
						<CouponIcon />
						<span className="text-primary text-xs">use coupon</span>
					</Button>
				</div>
				<div className="py-3 flex justify-between items-center">
					<div className="">
						<p className="text-xs font-light  !text-grey text-start">Price</p>
						<p className="text-2xl lg:text-3xl font-semibold">
							₦{product.price}
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
						size="lg"
						className="border-2 text-primary font-normal w-full border-primary"
					>
						Add to Cart
					</Button>
					<Button
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
