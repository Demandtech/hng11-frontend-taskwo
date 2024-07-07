import React from "react";
import newLetterimg from "../../assets/home/newsletter.png";
import { Image, Button } from "@nextui-org/react";

const NewsLetter = () => {
	return (
		<div className="mt-10 flex flex-col md:flex-row">
			<div className="w-full md:w-1/2 py-5 px-10 md:px-16 bg-white">
				<div className="sm:w-3/5 mb-7">
					<h3 className="text-black mb-3 text-2xl md:text-3xl  font-semibold">
						Sign Up for Our Newsletter
					</h3>
					<p className="text-black90 text-sm sm:text-base">
						To be the first to receive updates and plenty of bonus gifts
					</p>
				</div>
				<div className="flex gap-5">
					<input
						placeholder="Your email"
						type="text"
						className="border w-full pl-5 text-sm sm:text-base"
					/>
					<Button
						variant="solid"
						color="primary"
						size="lg"
						className="text-white font-medium"
					>
						Sign Up
					</Button>
				</div>
			</div>
			<div className="w-full md:w-1/2">
				<Image className="w-full" src={newLetterimg} />
			</div>
		</div>
	);
};

export default NewsLetter;
