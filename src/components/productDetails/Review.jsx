import React from "react";
import { reviews } from "../../data";
import ReviewCard from "./ReviewCard";

const Review = () => {
	return (
		<div>
			<div className="pt-10">
				<span className="bg-primary py-3 px-5 font-semibold text-white">
					Reviews
				</span>
				<div className="mt-10 space-y-10 py-5 lg:max-w-[80%] mx-auto">
					{reviews.map((item) => {
						return <ReviewCard key={item.id} item={item} />;
					})}
				</div>
			</div>
			<div className="text-center">
				<button className=" text-[#1D3B4A] font-semibold">More reviews</button>
			</div>
		</div>
	);
};

export default Review;
