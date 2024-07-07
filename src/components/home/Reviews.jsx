import React from "react";
import { FilledStar, StrokedStar, ArrowRightIcon } from "../Svgs";
import { Avatar, Button } from "@nextui-org/react";
import reviewImg1 from "../../assets/home/review1.png";
import reviewImg2 from "../../assets/home/review2.png";
import reviewImg3 from "../../assets/home/review3.png";

const Reviews = () => {
	return (
		<div className="py-10 w-[90%] mx-auto md:w-[80%]">
			<h3 className="text-2xl text-black90 mb-10 text-center md:text-3xl font-semibold">
				Reviews
			</h3>
			<div className=" pt-20   right-0 justify-between  flex overflow-x-auto gap-5 -bottom-10">
				<div className="min-w-[300px] relative w-[300px] py-5 px-10 flex flex-col items-center gap-2  bg-white">
					<div className="absolute -top-[50px] md:-top-[70px]">
						<Avatar
							className="w-[100px] h-[100px] md:w-[138px] md:h-[138px]"
							src={reviewImg1}
						/>
					</div>
					<div className="text-center pt-[45px] md:pt-[70px]">
						<h3 className="text-black text-lg md:text-2xl font-semibold whitespace-nowrap">
							Adeola Babalola
						</h3>
						<span className="text-black90 text-sm md:text-base">
							Culinary Chef
						</span>
					</div>
					<p className="leading-4 text-center text-xs text-black80 tracking-wide">
						“I most definitely use my favorite mug every day”
					</p>
					<div className="flex gap-[2px] pb-1 items-center">
						<FilledStar />
						<FilledStar />
						<FilledStar />
						<FilledStar />
						<FilledStar />
					</div>
				</div>
				<div className="min-w-[300px] relative w-[300px] py-5 px-10 flex flex-col items-center gap-2  bg-white">
					<div className="absolute -top-[50px] md:-top-[70px]">
						<Avatar
							className="w-[100px] h-[100px] md:w-[138px] md:h-[138px]"
							src={reviewImg2}
						/>
					</div>
					<div className="text-center pt-[45px] md:pt-[70px]">
						<h3 className="text-black text-lg md:text-2xl font-semibold whitespace-nowrap">
							Felix Imade
						</h3>
						<span className="text-black90 text-sm md:text-base">Foodie</span>
					</div>
					<p className="leading-4 text-black80 leading-1 text-center text-xs tracking-wide">
						“I love this product, improved my culinary experience”{" "}
					</p>
					<div className="flex gap-[2px] pb-1 items-center">
						<FilledStar />
						<FilledStar />
						<FilledStar />
						<FilledStar />
						<StrokedStar />
					</div>
				</div>
				<div className="min-w-[300px] relative w-[300px] py-5 px-10  flex flex-col items-center gap-2  bg-white">
					<div className="absolute -top-[50px] md:-top-[70px]">
						<Avatar
							className="w-[100px] h-[100px] md:w-[138px] md:h-[138px]"
							src={reviewImg3}
						/>
					</div>
					<div className="text-center pt-[45px] md:pt-[70px]">
						<h3 className="text-black text-lg md:text-2xl font-semibold">
							Sarah Obi
						</h3>
						<span className="text-black90 text-sm md:text-base">
							Food Vlogger
						</span>
					</div>
					<p className="leading-4 text-center text-xs tracking-wide text-black80">
						“I really enjoyed using the ceramic bowls. My videos got so many
						compliments”{" "}
					</p>
					<div className="flex gap-[2px] pb-1 items-center">
						<FilledStar />
						<FilledStar />
						<FilledStar />
						<StrokedStar />
						<StrokedStar />
					</div>
				</div>
			</div>
			<div className="justify-center mt-4 flex">
				<Button
					size="lg"
					className="font-semibold text-lg"
					variant="light"
					color="#1D3B4A"
					endContent={<ArrowRightIcon color="#1D3B4A" />}
				>
					More Reviews
				</Button>
			</div>
		</div>
	);
};

export default Reviews;
