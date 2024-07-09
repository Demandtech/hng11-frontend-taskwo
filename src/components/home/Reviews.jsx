import React from "react";
import { FilledStar, StrokedStar, ArrowRightIcon } from "../Svgs";
import { Avatar, Button } from "@nextui-org/react";

import { homeReviews } from "../../data";

const Reviews = () => {
	return (
		<div className="py-10 w-[90%] mx-auto md:w-[80%]">
			<h3 className="text-2xl text-black90 mb-10 text-center md:text-3xl font-semibold">
				Reviews
			</h3>
			<div className=" pt-20   right-0 justify-between  flex overflow-x-auto gap-5 -bottom-10">
				{homeReviews.map((item) => {
					return (
						<div
							key={item.id}
							className="min-w-[300px] relative w-[300px] py-5 px-10 flex flex-col items-center gap-2  bg-white"
						>
							<div className="absolute -top-[50px] md:-top-[70px]">
								<Avatar
									className="w-[100px] h-[100px] md:w-[138px] md:h-[138px]"
									src={item.image}
									alt={`${item.name} reviewer`}
								/>
							</div>
							<div className="text-center pt-[45px] md:pt-[70px]">
								<h3 className="text-black text-lg md:text-2xl font-semibold whitespace-nowrap">
									{item.name}
								</h3>
								<span className="text-black90 text-sm md:text-base">
									{item.proffession}
								</span>
							</div>
							<p className="leading-4 text-center text-xs text-black80 tracking-wide">
								{item.text}
							</p>
							<div className="flex gap-[2px] pb-1 items-center">
								<FilledStar />
								<FilledStar />
								<FilledStar />
								<FilledStar />
								<FilledStar />
							</div>
						</div>
					);
				})}
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
