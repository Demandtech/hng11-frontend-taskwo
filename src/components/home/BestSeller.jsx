import { Button } from "@nextui-org/react";
import React from "react";
import products from "../../data";
import ProductCard from "../ProductCard";

const BestSeller = () => {
	return (
		<div className="lg:max-w-[90%] px-5 md:px-0 mx-auto pb-10">
			<h3 className="text-lg mb-5 text-center md:text-2xl font-semibold">
				Our Best Sellers{" "}
			</h3>
			<div className="flex justify-end">
				<Button
					className="text-xs px-0"
					color="primary"
					variant="light"
					size="sm"
				>
					See more
				</Button>
			</div>
			<div className="justify-between flex flex-wrap">
				{products.slice(0, 3).map((item) => {
					return <ProductCard data={item} key={item.id} />;
				})}
			</div>
		</div>
	);
};

export default BestSeller;
