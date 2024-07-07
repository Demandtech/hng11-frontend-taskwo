import { Button, Image } from "@nextui-org/react";
import React from "react";
import blogImg1 from "../../assets/home/blog1.png";
import blogImg2 from "../../assets/home/blog2.png";

const Blog = () => {
	return (
		<div className="py-10  px-2 sm:px-5 lg:px-20">
			<h3 className="text-2xl text-black90 mb-10 text-center md:text-3xl font-semibold">
				Our Blog
			</h3>
			<div className="flex flex-col lg:flex-row overflow-y-hidden lg:overflow-x-auto gap-10">
				<div className="px-2 md:px-5 py-5 bg-white items-center lg:min-w-[770px] flex gap-2 lg:gap-5">
					<div>
						<Image
							className="w-[150px] lg:min-w-[235px] h-full"
							src={blogImg2}
						/>
					</div>
					<div className="flex w-full flex-col gap-1 lg:gap-4">
						<div>
							<h5 className="font-bold whitespace-nowrap overflow-hidden text-ellipsis text-xs sm:text-sm md:text-2xl">
								Cooking tools you must have{" "}
							</h5>
							<p className="text-xs md:text-lg text-[#8F8F8F]">
								by Culinary Sports
							</p>
						</div>
						<div>
							<p className="text-black90 text-[8px] font-medium md:text-base">
								Our List of cooking tools and gadgets to take your cooking to
								the next level. Top of the line eco-friendly wooden spatulas to
								pair your favorite casserole dish
							</p>
							<Button
								variant="light"
								color="primary"
								className="p-0 h-full items-start justify-start text-[10px] font-medium md:text-base"
							>
								Read More...
							</Button>
						</div>
					</div>
				</div>

				<div className="px-2 md:px-5 py-5 bg-white items-center lg:min-w-[770px] flex gap-2 lg:gap-5">
					<div>
						<Image
							className="w-[150px] lg:min-w-[235px] h-full"
							src={blogImg1}
						/>
					</div>
					<div className="flex w-full flex-col gap-1 lg:gap-4">
						<div>
							<h5 className="font-bold whitespace-nowrap overflow-hidden text-ellipsis text-xs sm:text-sm md:text-2xl">
								Cooking tools you must have{" "}
							</h5>
							<p className="text-xs md:text-lg text-[#8F8F8F]">
								by Culinary Sports
							</p>
						</div>
						<div>
							<p className="text-black90 text-[8px] font-medium md:text-base">
								Our List of cooking tools and gadgets to take your cooking to
								the next level. Top of the line eco-friendly wooden spatulas to
								pair your favorite casserole dish
							</p>
							<Button
								variant="light"
								color="primary"
								className="p-0 h-full items-start justify-start text-[10px] font-medium md:text-base"
							>
								Read More...
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
