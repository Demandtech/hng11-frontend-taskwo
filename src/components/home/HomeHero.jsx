import React from "react";
import heroImg from "../../assets/home/homehero.png";
import {
	FastDeliveryIcon,
	AestheticIcon,
	AffordableIcon,
	EcoFriendlyIcon,
} from "../Svgs";

const HomeHero = () => {
	return (
		<div>
			<div
				className="h-[400px] md:h-[500px] w-full"
				style={{
					// height: "400px",
					// background: `url(${heroImg})`,
					background: `
                linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0.4)),
                url(${heroImg})
                `,
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
					backgroundSize: "cover",
					position: "relative",
					zIndex: "0",
				}}
			>
				<div className="text-center z-50 md:max-w-[575px] pt-20 text-white  mx-auto">
					<h1 className="font-black px-2 md:px-0  z-50 md:leading-[50px] text-2xl md:text-5xl mb-2">
						Lets Help you
						<br />
						Spice up your Kitchen
					</h1>
					<p className="text-sm z-50 px-5 md:px-0  md:text-lg font-light">
						We can help you create aesthetic and functional
						<br className="hidden md:block" />
						cooking spaces where you can accomplish your culinary dreams
					</p>
				</div>
			</div>
			<div className="-translate-y-20 lg:-translate-y-1/2 z-50">
				<div className="px-3 lg:w-[80%] mx-auto right-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 -bottom-10">
					<div className="w-full py-5 px-3 md:px-5 flex flex-col items-center gap-2  bg-white">
						<AestheticIcon />
						<h3 className="font-semibold whitespace-nowrap text-sm md:text-lg">
							Aesthetic Appeal
						</h3>
						<p className="text-xs md:text-sm text-center text-[#8F8F8F]">
							Eco-Friendly and beautiful designs to spice up your kitchen.
						</p>
					</div>
					<div className="w-full py-5 px-3 gap-2 md:px-5 flex flex-col items-center  bg-white">
						<EcoFriendlyIcon />
						<h3 className="font-semibold text-sm md:text-lg">Eco-Friendly</h3>
						<p className="text-xs text-center md:text-sm text-[#8F8F8F]">
							Recycled and Biodegradable materials were used.
						</p>
					</div>
					<div className="w-full py-5 px-3 md:px-5 items-center flex flex-col gap-2  bg-white">
						<AffordableIcon />
						<h3 className="font-semibold whitespace-nowrap text-sm md:text-lg">
							Affordable Price
						</h3>
						<p className="text-xs md:text-sm text-center text-[#8F8F8F]">
							Prices that suit your pockets for the best products
						</p>
					</div>
					<div className="w-full py-5 px-3 md:px-5 flex flex-col gap-2 items-center  bg-white">
						<FastDeliveryIcon />
						<h3 className="font-semibold whitespace-nowrap text-sm md:text-lg">
							Fast Delivery
						</h3>
						<p className="text-xs sm:text-sm text-center text-[#8F8F8F]">
							Our dispatch riders will bring your product to your door step
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeHero;
