import React from "react";

const Description = () => {
	return (
		<div className="pt-10 mb-12">
			<span className="bg-primary py-3 px-5 font-semibold text-white">
				Description
			</span>

			<div className="mt-10 text-black80">
				<h5 className="text-base font-medium mb-5">key Features:</h5>
				<ul className="tracking-wider list-disc list-outside pl-12 mb-5 space-y-3 ">
					<li className="">
						<span className="font-medium">Material: </span> Crafted from durable
						ceramic that ensures even heat distribution and retention, perfect
						for slow cooking and simmering.
					</li>
					<li>
						<span className="font-medium">Size Options: </span>
						Available in various sizes to accommodate different cooking needs,
						from small family meals to hearty stews.{" "}
					</li>
					<li>
						<span className="font-medium">Design: </span>
						Stylish and functional, with a smooth, non-reactive surface that
						enhances food flavors and simplifies cleanup.
					</li>
					<li>
						<span className="font-medium">Handles: </span>
						Ergonomically designed handles for a comfortable grip and easy
						maneuverability.
					</li>
					<li>
						<span className="font-medium">Compatibility: </span>
						Suitable for use on gas, electric, ceramic, and induction cooktops,
						as well as in ovens.
					</li>
				</ul>
				<h5 className="text-base font-medium mb-5">
					Why Choose Our Ceramic Cooking Pot?
				</h5>
				<p className="mb-5">
					Our ceramic cooking pot is more than just a cooking vessel; it's a
					reflection of our commitment to quality and culinary excellence.
					Whether you're simmering soups, braising meats, or preparing delicate
					sauces, its superior heat distribution ensures consistent cooking
					results every time. The non-porous surface also makes it resistant to
					stains and odors, preserving the integrity of your dishes.
				</p>
				<h5 className="text-base font-medium mb-5">Care and Maintenance:</h5>
				<p className="mb-5">
					To maintain its pristine condition, hand wash with mild soap and avoid
					harsh abrasives. The ceramic material is dishwasher-safe for added
					convenience, ensuring effortless cleanup after every use.
				</p>
				<p>
					Transform your kitchen into a culinary haven with our premium ceramic
					cooking pot. Designed to meet the demands of professional chefs and
					home cooks alike, it combines functionality with timeless elegance,
					making it an essential addition to your cookware collection.
				</p>
			</div>
		</div>
	);
};

export default Description;
