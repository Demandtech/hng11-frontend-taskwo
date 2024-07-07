import React from "react";
import { LineIcon, RightCurve, LeftCurve } from "../Svgs";

const WhyChooseUs = () => {
	return (
		<div className="mb-10">
			<div className=" mb-8 w-full items-center flex  flex-col">
				<h3 className="text-2xl text-black90md:text-3xl font-semibold">
					Why Choose Us
				</h3>
				<LineIcon />
			</div>
			<p className="text-black80 tracking-wide text-center text-xs sm:text-base md:text-lg px-5 lg:w-3/5 mx-auto">
				At Cookware, we believe that cooking should be an experience that not
				only delights the senses but also nurtures our planet. Our journey began
				with a simple yet powerful idea: to create cookware that embodies both
				sustainability and aesthetic appeal.
			</p>
			<div className="grid lg:grid-cols-2 px-5 lg:px-20">
				<div className="lg:col-span-1"></div>
				<div className="lg:col-span-1 lg:px-5 ">
					<RightCurve />
					<h3 className="text-base text-black90 mb-1 md:text-2xl font-semibold">
						Our Commitment to Sustainability
					</h3>
					<p className="text-black80 text-xs md:text-base">
						We are committed to sustainability in every aspect of our business.
						From sourcing eco-friendly materials to reducing our carbon
						footprint, we strive to make a positive impact on the environment.
						Our cookware is crafted from recycled stainless steel, non-toxic
						ceramic coatings to ensure durability without compromising our
						planet's well-being.
					</p>
				</div>
				<div className="lg:col-span-1 lg:px-5">
					<LeftCurve />
					<h3 className="text-base text-black90 mb-1 md:text-2xl font-semibold">
						Embracing Beauty in Design
					</h3>
					<p className="text-black80 text-xs md:text-base">
						Beauty is at the heart of our design philosophy. Each piece of
						cookware is thoughtfully crafted not only for its functionality but
						also for its aesthetic appeal. Whether you prefer sleek modern
						designs or timeless classics, our collections are curated to
						complement your kitchen and elevate your cooking experience.
					</p>
				</div>
				<div className="lg:col-span-1"></div>
			</div>

			<p className="text-black80 pt-10 tracking-wide text-center text-xs sm:text-base md:text-lg px-5 lg:w-3/5 mx-auto">
				When you choose <span className="text-primary">Acookware</span> , you're
				not just choosing quality cookware; you're joining us in our mission to
				create a more sustainable future. We invite you to explore our
				collections, discover the perfect pieces for your kitchen, and
				experience the harmony of beauty and eco-friendliness in every meal you
				prepare.
			</p>
		</div>
	);
};

export default WhyChooseUs;
