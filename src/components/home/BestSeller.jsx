import { Button } from "@nextui-org/react";
import React from "react";
// import products from "../../data";
import ProductCard from "../products/ProductCard";
import { useAppContext } from '../../context/AppContext';

const BestSeller = () => {
	const {products} = useAppContext()
	return (
		<div className="lg:max-w-[90%] px-5 md:px-0 mx-auto pb-10">
			<h3 className="text-lg mb-14 text-black90 text-center md:text-2xl font-semibold">
				Our Best Sellers{" "}
			</h3>

			<div className="justify-center gap-16 flex overflow-x-auto">
				{products.slice(0, 3).map((item) => {
					return <ProductCard data={item} key={item.id} />;
				})}
			</div>
		</div>
	);
};

export default BestSeller;
