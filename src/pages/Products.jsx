import ProductAside from "../components/ProductAside";
import ProductCard from "../components/ProductCard";
import { ArrowLeftIcon, ArrowRightIcon } from "../components/Svgs";
import MainLayout from "../components/layout/MainLayout";
import products from "../data";

const Products = () => {
	return (
		<MainLayout>
			<div className="py-14 px-2  sm:px-5 md:px-20">
				<h2 className="font-semibold text-2xl text-center pb-10 text-black90">
					Product List
				</h2>
				<div className="grid lg:grid-cols-3 gap-16">
					<div className="lg:col-span-1">
						<ProductAside />
					</div>
					<div className="lg:col-span-2">
						<div className="flex gap-7 flex-wrap mb-16 ">
							{products.map((product) => {
								return <ProductCard key={product.id} data={product} />;
							})}
						</div>
						<div>
							<ul className="flex items-center gap-3 justify-center sm:justify-end">
								<li>
									<ArrowLeftIcon />
								</li>
								<li className="p-3 text-lg font-medium text-[#8F8F8F]">1</li>
								<li className="px-3 py-1 text-lg font-semibold text-white bg-primary">
									2
								</li>
								<li className="p-3 text-lg font-medium text-[#8F8F8F]">3</li>
								<li className="p-3 text-lg font-medium text-[#8F8F8F]">4</li>
								<li className="p-3 text-lg font-medium text-[#8F8F8F]">5</li>
								<li>
									<ArrowRightIcon />
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

export default Products;
