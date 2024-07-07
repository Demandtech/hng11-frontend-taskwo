import { useState } from "react";
import CartLayout from "../components/layout/CartLayout";
import { useNavigate, Link } from "react-router-dom";
import { Button, useDisclosure, Checkbox } from "@nextui-org/react";
import { ArrowLeftIcon, CloseIcon } from "../components/Svgs";
import Modal from "../components/Modal";

const Checkout = () => {
	const navigate = useNavigate();
	const [isSelected, setIsSelected] = useState(false);
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	return (
		<CartLayout>
			<div className="grid gap-10 md:grid-cols-3">
				<div className="md:col-span-2 px-2 py-10  sm:px-5 md:px-20">
					<div className="mb-7 justify-between md:mb-10 flex items-center">
						<Button
							onPress={() => {
								navigate(-1);
							}}
							className="px-0 justify-start"
						>
							<ArrowLeftIcon color="black" />
							<span>Back</span>
						</Button>
					</div>
					<h2 className="text-2xl mb-5 font-bold  md:text-[2.5rem]">
						Delivery Information
					</h2>
					<div className="space-y-10">
						<div>
							<label className="block text-black80 sm:text-lg" htmlFor="name">
								Name
							</label>
							<input
								id="name"
								name="name"
								type="text"
								placeholder="Enter your name"
								className="bg-transparent h-14 pl-8 border border-lightgrey w-48 p-2"
							/>
						</div>
						<div>
							<label className="block text-black80 sm:text-lg" htmlFor="phone">
								Phone Number
							</label>
							<input
								id="phone"
								type="text"
								name="phone"
								placeholder="Enter phone number"
								className="bg-transparent h-14 pl-8 border border-lightgrey w-4/5 sm:max-w-80 p-2"
							/>
						</div>
						<div>
							<label className="block text-black80 sm:text-lg" htmlFor="name">
								Delivery Address
							</label>
							<textarea
								id="name"
								cols={3}
								rows={5}
								type="text"
								placeholder="Enter your address"
								className="bg-transparent  resize-none  pl-8 border border-lightgrey w-full p-2"
							/>
						</div>
						<div className="flex gap-10">
							<div className="w-3/5 sm:w-48">
								<label
									className="block text-black80 sm:text-lg"
									htmlFor="state"
								>
									State
								</label>
								<input
									id="state"
									name="state"
									type="text"
									placeholder="Enter your state"
									className="bg-transparent h-14 pl-8 border border-lightgrey w-full p-2"
								/>
							</div>
							<div className="w-2/5 sm:max-w-80">
								<label
									className="block text-black80 sm:text-lg"
									htmlFor="country"
								>
									Country
								</label>
								<input
									id="country"
									type="text"
									name="country"
									placeholder="Enter Country"
									className="bg-transparent h-14 pl-8 border border-lightgrey w-full p-2"
								/>
							</div>
						</div>
						<div>
							<Checkbox
								classNames={{
									label: "text-black80 text-sm",
								}}
								className="text-white"
								isSelected={isSelected}
								onValueChange={setIsSelected}
							>
								Set as Defualt Address
							</Checkbox>
						</div>
						<div className="flex justify-between sm:justify-end sm:gap-10">
							<Button
								className="text-lg font-medium px-10 "
								variant="light"
								color="primary"
								size="lg"
								startContent={<CloseIcon />}
							>
								Cancel
							</Button>
							<Button
								size="lg"
								className="text-lg font-medium px-10 text-white"
								color="primary"
							>
								Save
							</Button>
						</div>
					</div>
				</div>
				<div className="md:col-span-1 py-10 md:pt-28 pr-2 pl-2 bg-[#FAFAFA] sm:pl-5 sm:pr-5 md:pr-20">
					<div>
						<h3 className="text-lg mb-5 font-semibold md:text-[2rem]">
							Card Details
						</h3>
						<div className="space-y-10">
							<div>
								<label
									className="block text-black80 sm:text-lg"
									htmlFor="card_name"
								>
									Card Name
								</label>
								<input
									id="card_name"
									name="card_name"
									type="text"
									placeholder="Faith Alliyu"
									className="bg-transparent h-14 pl-8 border border-lightgrey w-full p-2"
								/>
							</div>
							<div>
								<label
									className="block text-black80 sm:text-lg"
									htmlFor="card_number"
								>
									Card Number
								</label>
								<input
									id="card_number"
									name="card_number"
									type="text"
									placeholder="0000-0000-0000-0000"
									className="bg-transparent h-14 pl-8 border border-lightgrey w-full p-2"
								/>
							</div>
							<div className="flex gap-10">
								<div className="w-1/2 md:w-3/5">
									<label
										className="block text-black80 sm:text-lg"
										htmlFor="card_number"
									>
										Card expiry date
									</label>
									<input
										id="card_number"
										name="card_number"
										type="text"
										placeholder="10/20"
										className="bg-transparent h-14 pl-8 border border-lightgrey w-full p-2"
									/>
								</div>
								<div className="w-1/2 md:w-2/5">
									<label
										className="block text-black80 sm:text-lg"
										htmlFor="card_number"
									>
										CVV
									</label>
									<input
										id="card_number"
										name="card_number"
										type="text"
										placeholder="123"
										className="bg-transparent text-black80 h-14 pl-8 border border-lightgrey w-full p-2"
									/>
								</div>
							</div>
							<Button
								onPress={onOpen}
								size="lg"
								color="primary"
								className="w-full text-white font-medium text-lg"
							>
								Checkout
							</Button>
						</div>
					</div>
				</div>
			</div>
			<Modal isOpen={isOpen} onOpenChange={onOpenChange} />
		</CartLayout>
	);
};

export default Checkout;
