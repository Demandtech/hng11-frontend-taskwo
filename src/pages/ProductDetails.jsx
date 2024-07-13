import React, { useState, useEffect } from "react";
import MainLayout from "../components/layout/MainLayout";
// import products from "../data";
import ProductCard from "../components/products/ProductCard";
import ProductDetailsHero from "../components/productDetails/ProductDetailsHero";
import Description from "../components/productDetails/Description";
import Review from "../components/productDetails/Reviews";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const ProductDetails = () => {
	const { id } = useParams();
	const { getProduct, products, getAllProducts } = useAppContext();

	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		(async () => {
			// console.log("HERE")
			await getProduct(id);
			await getAllProducts();

			setIsLoading(false);
		})();
	}, [id]);

	return (
		<MainLayout>
			<div className="py-14 px-2  sm:px-5 md:px-20">
				<h2 className="font-semibold text-2xl text-center pb-10 text-black90">
					Product Details
				</h2>
				{isLoading ? (
					<div className="flex justify-center w-full">
						<p className="text-center text-black90 font-semibold text-2xl">
							Loading...
						</p>
					</div>
				) : (
					<>
						<ProductDetailsHero />
						<div className="mb-12">
							<h3 className="text-lg mb-5 text-center md:text-2xl font-semibold">
								You may also like this
							</h3>
							<div className="flex px-5 md:px-0 gap-10 overflow-x-auto">
								{products?.slice(0, 3).map((item) => {
									return <ProductCard key={item.id} data={item} />;
								})}
							</div>
						</div>
					</>
				)}
				<Description />
				<Review />
			</div>
		</MainLayout>
	);
};

export default ProductDetails;
