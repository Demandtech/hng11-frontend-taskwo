import { Slider, Chip } from "@nextui-org/react";
import { useState, useEffect } from "react";

const ProductAside = () => {
	const [price, setPrice] = useState([2000, 33000]);
	const [material, setMaterial] = useState(new Set());

	const handleAddMaterial = (item) => {
		setMaterial((prev) => {
			const newMaterial = new Set(prev);
			if (newMaterial.has(item)) {
				newMaterial.delete(item); // Toggle off
			} else {
				newMaterial.add(item); // Toggle on
			}
			return newMaterial;
		});
	};

	// useEffect(() => {
	// 	console.log(material);
	// }, [material]);

	return (
		<div className="flex mb-20 flex-col w-full min-h-dvh gap-10 overflow-y-auto">
			<div>
				<div className="bg-primary font-semibold py-2 px-10 md:px-5 text-white">
					Product Category
				</div>
				<ul className="bg-white py-6  ">
					<li className="hover:bg-[#F3F3F3] py-5 cursor-pointer px-10 md:px-5 ">Pots</li>
					<li className="hover:bg-[#F3F3F3] py-5 cursor-pointer px-10 md:px-5 ">Pans</li>
					<li className="hover:bg-[#F3F3F3] py-5 cursor-pointer px-10 md:px-5 ">
						Cutlery
					</li>
					<li className="hover:bg-[#F3F3F3] py-5 cursor-pointer px-10 md:px-5 ">
						TableCloth
					</li>
					<li className="hover:bg-[#F3F3F3] py-5 cursor-pointer px-10 md:px-5 ">
						Knives
					</li>
				</ul>
			</div>
			<div>
				<div className="bg-primary py-3  text-white px-10 font-semibold md:text-center">
					Material
				</div>
				<div className="bg-white flex flex-wrap gap-5 md:justify-center px-10 md:px-5 py-4">
					{["Ceramic", "Steel", "Aluminium", "Glass", "Wood", "Plastic"].map(
						(item) => {
							return (
								<Chip
									onClick={() => handleAddMaterial(item)}
									size="lg"
									key={item}
									className={`border text-sm rounded-none py-1 ${
										material.has(item) && "bg-primary text-white"
									}`}
									onClose={() => console.log("close")}
								>
									{item}
								</Chip>
							);
						}
					)}
				</div>
			</div>
			<div>
				<div className="bg-primary py-3 px-10 font-semibold text-white md:text-center">
					Price Range
				</div>
				<div className="bg-white py-10 px-10 md:px-4">
					<label htmlFor="" className="font-semibold text-2xl block mb-3">
						₦{price[0]} - ₦{price[1]}
					</label>
					<Slider
						classNames={{
							track: "bg-grey",
						}}
						aria-labelledby="Price range"
						value={price}
						onChange={setPrice}
						step={50}
						minValue={0}
						maxValue={33000}
						className="w-full"
						size="sm"
					/>
				</div>
			</div>
		</div>
	);
};

export default ProductAside;
