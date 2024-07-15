import { Button } from "@nextui-org/react";
import ProductAside from "../components/products/ProductAside";
import ProductCard from "../components/products/ProductCard";
import {
	ArrowLeftIcon,
	ArrowRightIcon,
	CloseIcon,
	FilterIcon,
} from "../components/Svgs";
import MainLayout from "../components/layout/MainLayout";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { useSearchParams } from "react-router-dom";

const Products = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [openFilter, setOpenFilter] = useState(false);
	const { getAllProducts, products, totalPage } = useAppContext();
	const [isLoading, setIsLoading] = useState(false);
	const [page, setPage] = useState(1);

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

	useEffect(() => {
		if (page > 1) {
			setSearchParams({ page });
		} else {
			setSearchParams({});
		}
		setIsLoading(true);
		(async () => {
			// console.log("HERE")
			await getAllProducts(page);

			setIsLoading(false);
		})();
	}, [page]);

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
				<div className="flex relative  md:gap-16">
					<div className=" md:w-[30%] ">
						<div
							className={`${
								openFilter ? "block " : "hidden"
							}  left-0 bottom-0 z-40 right-0 top-12 bg-white md:bg-[#f1f1f1] min-h-svh overflow-auto fixed md:static md:block`}
						>
							<div className="flex px-10 z-20 mb-4  justify-between sticky pt-14 pb-2  bg-white top-0 md:hidden">
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
					<div className="md:w-[70%] relative px-5 md:px-0  min-h-[400px] md:min-h-[1044px]">
						{isLoading && !products?.length < 1 ? (
							<div className="flex justify-center w-full">
								<p className="text-center text-black90 font-semibold text-2xl">
									Loading...
								</p>
							</div>
						) : (
							<div className="flex gap-7 flex-wrap mb-16 ">
								{products?.length > 0 &&
									products?.map((product) => {
										return <ProductCard key={product.id} data={product} />;
									})}
							</div>
						)}

						{totalPage > 1 && (
							<div className="absolute bottom-0 right-0">
								<ul className="flex items-center gap-1  md:gap-3 justify-end">
									<Button
										onPress={() => {
											setPage((prev) => {
												return prev > 1 ? prev - 1 : prev;
											});
										}}
										isIconOnly
										className="rounded-full"
									>
										<ArrowLeftIcon />
									</Button>
									{Array.from({ length: totalPage }).map((_, index) => {
										return (
											<Button
												key={index}
												onPress={() => {
													setPage(index + 1);
												}}
												isIconOnly
												className={`${
													page === index + 1
														? "bg-primary text-white font-semibold py-1"
														: "text-[#8F8F8F] font-medium"
												} h-6 min-w-6 !w-6 p-1 sm:min-w-10 sm:h-10 sm:p-3  text-sm sm:text-lg `}
											>
												{index + 1}
											</Button>
										);
									})}

									<Button
										onPress={() => {
											setPage((prev) => {
												return prev < totalPage ? prev + 1 : prev;
											});
										}}
										className="rounded-full"
										isIconOnly
									>
										<ArrowRightIcon />
									</Button>
								</ul>
							</div>
						)}
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

export default Products;
