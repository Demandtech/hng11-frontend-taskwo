import React from "react";
import {
	LineIcon,
	RightCurve,
	LeftCurve,
	SmallLeftCurve,
	SmallRightCurve,
} from "../Svgs";
import { Image } from "@nextui-org/react";
import img1 from "../../assets/home/whychoose1.png";
import img2 from "../../assets/home/whychoose2.png";
import img3 from "../../assets/home/whychoose3.png";
import img4 from "../../assets/home/whychoose4.png";
import imgbig1 from "../../assets/home/whychoosebig1.png";
import imgbig2 from "../../assets/home/whychoosebig2.png";

const WhyChooseUs = () => {
	return (
		<div className="mb-10 pb-10">
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
			<div className="grid gap-5 lg:grid-cols-2 px-5 lg:px-20">
				<div className="lg:col-span-1 pt-10  ">
					<div className="md:hidden">
						<div className="w-[70%] relative">
							<Image
								width={"100%"}
								src={img1}
								className="object-cover object-center"
							/>
						</div>
						<div className="w-1/2  relative ml-auto  -mt-[100px]">
							<Image
								classNames="w-full"
								width={"100%"}
								src={img2}
								className=" object-cover"
							/>
						</div>
					</div>
					<div className=" hidden md:block">
						<div className="w-[55%] relative">
							<Image
								width={"100%"}
								src={imgbig1}
								className="object-cover -z-1  object-center"
							/>
						</div>
						<div className="w-[55%]  relative ml-auto  -mt-[160px]">
							<Image
								classNames="w-full"
								width={"100%"}
								src={imgbig2}
								className=" object-cover"
							/>
						</div>
					</div>
				</div>
				<div className="lg:col-span-1 pt-10 sm:pt-20">
					<div className=" ">
						<RightCurve className="-mt-[180px] hidden md:block -ml-12 -mb-[80px]" />
						<SmallLeftCurve className="md:hidden translate-x-4 -mb-6 -mt-36" />
						<h3 className="text-base text-black90 mb-1 md:text-2xl font-semibold">
							Our Commitment to Sustainability
						</h3>
						<p className="text-black80 text-xs md:text-base">
							We are committed to sustainability in every aspect of our
							business. From sourcing eco-friendly materials to reducing our
							carbon footprint, we strive to make a positive impact on the
							environment. Our cookware is crafted from recycled stainless
							steel, non-toxic ceramic coatings to ensure durability without
							compromising our planet's well-being.
						</p>
					</div>
				</div>
				<div className="lg:col-span-1">
					<div className="">
						{/* <div className=" ">
							<SmallLeftCurve className="md:hidden translate-x-5 -mt-28" />
						</div> */}
						<div className="">
							<LeftCurve className="-mt-[80px] -mb-[80px] -translate-x-4  hidden md:block" />
						</div>
						<div className="hidden md:block">
							<h3 className="text-base text-black90 mb-1 md:text-2xl font-semibold">
								Embracing Beauty in Design
							</h3>
							<p className="text-black80 text-xs md:text-base">
								Beauty is at the heart of our design philosophy. Each piece of
								cookware is thoughtfully crafted not only for its functionality
								but also for its aesthetic appeal. Whether you prefer sleek
								modern designs or timeless classics, our collections are curated
								to complement your kitchen and elevate your cooking experience.
							</p>
						</div>
					</div>
				</div>
				<div className="lg:col-span-1">
					<div className=" mt-10 pb-5 md:hidden">
						<div className="w-[70%] relative   ml-auto">
							<Image width="100%" src={img4} className="" />
						</div>
						<div className="w-1/2 relative mr-auto -mt-[100px]">
							<Image src={img3} width={"100%"} className="z-1" />
						</div>
					</div>
					<div className=" mt-10 pb-5 hidden md:block">
						<div className="w-[55%] relative   ml-auto">
							<Image width="100%" src={img4} className="" />
						</div>
						<div className="w-[55%] relative mr-auto -mt-[160px]">
							<Image src={img3} width={"100%"} className="z-1" />
						</div>
					</div>

					<div className="md:hidden mb-10">
						<SmallRightCurve className="ml-auto -mt-[100px] -mb-8 -translate-x-3" />

						<h3 className="text-base text-black90 mb-1 md:text-2xl font-semibold">
							Embracing Beauty in Design
						</h3>
						<p className="text-black80 text-xs md:text-base">
							Beauty is at the heart of our design philosophy. Each piece of
							cookware is thoughtfully crafted not only for its functionality
							but also for its aesthetic appeal. Whether you prefer sleek modern
							designs or timeless classics, our collections are curated to
							complement your kitchen and elevate your cooking experience.
						</p>
					</div>
				</div>
			</div>

			<p className="text-black80 md:pt-10 tracking-wide sm:text-center text-xs sm:text-base md:text-lg px-5 lg:w-3/5 mx-auto">
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
