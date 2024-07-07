import React from "react";
import { Avatar } from "@nextui-org/react";
import { FilledStar, StrokedStar } from "../Svgs";

const ReviewCard = ({ item }) => {
	return (
		<div className="bg-white p-5">
			<div className="flex items-center">
				<div className="flex items-center gap-5 mb-5">
					<Avatar className="w-16 h-16" src={item.image} />
					<div>
						<p className="text-sm sm:text-lg md:text-2xl mb-3 font-semibold  whitespace-nowrap">
							{item.name}
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
				<p className="ml-auto text-grey text-sm sm:text-base whitespace-nowrap">
					12 hours ago
				</p>
			</div>
			<p className="text-sm sm:text-lg ">{item.text}</p>
		</div>
	);
};

export default ReviewCard;
