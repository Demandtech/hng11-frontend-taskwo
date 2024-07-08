import { Button } from "@nextui-org/react";
import ProductAside from "../components/ProductAside";
import ProductCard from "../components/ProductCard";
import {
	ArrowLeftIcon,
	ArrowRightIcon,
	CloseIcon,
	FilterIcon,
} from "../components/Svgs";
import MainLayout from "../components/layout/MainLayout";
import products from "../data";
import { useEffect, useState } from "react";

const Products = () => {
	const [openFilter, setOpenFilter] = useState(false);

	useEffect(() => {
		const body = document.body;
		if (openFilter) {
			body.style.overflowY = "hidden";
		} else {
			body.style.overflowY = "auto";
		}

		return () => {
			body.style.overflowY = "auto";
		};
	}, [openFilter]);
	return (
		<MainLayout>
			<div className="py-14 px-2  sm:px-5 md:px-20 ">
				<div className="pb-10 flex items-center ">
					<h2 className="font-semibold text-2xl ml-auto md:mx-auto text-center text-black90">
						Product List
					</h2>
					<Button
						onPress={() => {
							setOpenFilter(!openFilter);
						}}
						className="ml-auto md:hidden"
					>
						<FilterIcon />
					</Button>
				</div>
				<div className="flex  md:gap-16">
					<div className=" md:w-[30%] ">
						<div
							className={`${
								openFilter ? "block " : "hidden"
							} z-20 left-0 bottom-0 right-0 top-12 bg-white md:bg-[#f1f1f1] min-h-svh overflow-auto fixed md:static md:block`}
						>
							<div className="flex px-10 mb-4 z-20 justify-between sticky pt-14 pb-2  bg-white top-0 md:hidden">
								<p className="font-bold text-2xl text-black90">Filter</p>
								<Button
									isIconOnly
									onPress={() => setOpenFilter(false)}
									className=""
									size="sm"
								>
									<CloseIcon />
								</Button>
							</div>
							<div>
								<ProductAside />
							</div>
						</div>
					</div>
					<div className="md:w-[70%] px-5 md:px-0">
						<div className="flex gap-7 flex-wrap mb-16 ">
							{products.map((product) => {
								return <ProductCard key={product.id} data={product} />;
							})}
						</div>
						<div>
							<ul className="flex items-center gap-2 md:gap-3 justify-end">
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
