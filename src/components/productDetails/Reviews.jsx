import React from "react";
import { reviews } from "../../data";
import ReviewCard from "./ReviewCard";
import { Button } from '@nextui-org/react';


const Review = () => {
	return (
		<div>
			<div className="pt-10">
				<span className="bg-primary py-3 px-5 font-semibold text-white">
					Reviews
				</span>
				<div className="mt-10 space-y-10 py-5  mx-auto">
					{reviews.map((item) => {
						return <ReviewCard key={item.id} item={item} />;
					})}
				</div>
			</div>
			<div className="text-center">
				<Button className=" text-[#1D3B4A] font-semibold">More reviews</Button>
			</div>
		</div>
	);
};

export default Review;
