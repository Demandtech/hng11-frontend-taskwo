import { useEffect, useState } from "react";
import CartLayout from "../components/layout/CartLayout";
import { useNavigate, Link } from "react-router-dom";
import { Button, useDisclosure, Checkbox, card } from "@nextui-org/react";
import { ArrowLeftIcon, CloseIcon } from "../components/Svgs";
import Modal from "../components/Modal";
import { useAppContext } from "../context/AppContext";

const Checkout = () => {
	const navigate = useNavigate();
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const { snackBar, removeAllCartItems } = useAppContext();
	const [info, setInfo] = useState(() => {
		const savedInfo = localStorage.getItem("INFO");
		return savedInfo
			? JSON.parse(savedInfo)
			: {
					name: "",
					phone: "",
					address: "",
					state: "",
					country: "",
					saved: false,
			  };
	});

	const [cardInfo, setCardInfo] = useState(() => {
		const savedCardInfo = localStorage.getItem("CARD-INFO");
		return savedCardInfo
			? JSON.parse(savedCardInfo)
			: {
					name: "",
					cardNumber: "",
					cvv: "",
					expDate: "",
			  };
	});

	const handleInfoChange = (e) => {
		const { value, name } = e.target;

		setInfo((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	};

	const handleCardInfoChange = (e) => {
		const { value, name } = e.target;

		if (name === "cardNumber") {
			const formattedCardNumber = value
				.replace(/\D/g, "")
				.replace(/(\d{4})(?=\d)/g, "$1-")
				.slice(0, 19);
			setCardInfo((prev) => {
				return {
					...prev,
					[name]: formattedCardNumber,
				};
			});
		} else if (name === "expDate") {
			const formattedExpiredDate = value
				.replace(/[^\d\/]/g, "")
				.replace(/^(\d{2})(\d)/, "$1/$2")
				.substr(0, 5);
			setCardInfo((prev) => {
				return {
					...prev,
					[name]: formattedExpiredDate,
				};
			});
		} else if (name === "cvv") {
			const formattedCvv = value.replace(/[^0-9]/g, "").substr(0, 3);
			setCardInfo((prev) => {
				return {
					...prev,
					[name]: formattedCvv,
				};
			});
		} else if (name === "name") {
			setCardInfo((prev) => {
				return {
					...prev,
					[name]: value.replace(/[^a-zA-Z\s]|(\s{2,})/g, ""),
				};
			});
		}
	};

	const handleCheckout = () => {
		if (Object.values(info).some((item) => item === "")) {
			snackBar("Please check Delivery Information", "info");
		} else if (!cardInfo.name) {
			snackBar("Card name Can not be empty", "info");
		} else if (cardInfo?.cardNumber?.length !== 19) {
			snackBar("Please check card number", "info");
		} else if (cardInfo.expDate.length !== 5) {
			snackBar("Please check card expiry date", "info");
		} else if (cardInfo.cvv.length !== 3) {
			snackBar("Please check card cvv", "info");
		} else {
			snackBar("Order process successfully", "success");
			onOpen();
			localStorage.removeItem("INFO");
			localStorage.removeItem("CARD-INFO");
			setInfo({
				name: "",
				phone: "",
				address: "",
				state: "",
				country: "",
				saved: false,
			});
			setCardInfo({
				name: "",
				cardNumber: "",
				cvv: "",
				expDate: "",
			});
			removeAllCartItems("checkout");
			setTimeout(() => {
				navigate("/products");
			}, 5000);
		}
	};

	useEffect(() => {
		localStorage.setItem("INFO", JSON.stringify(info));
		localStorage.setItem("CARD-INFO", JSON.stringify(cardInfo));
	}, [info, cardInfo]);

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
							<label
								className="block text-black80 text-sm sm:text-lg"
								htmlFor="name"
							>
								Name
							</label>
							<input
								id="name"
								name="name"
								value={info.name}
								type="text"
								onChange={handleInfoChange}
								placeholder="Enter your name"
								className="bg-transparent h-12 sm:h-14 pl-8 border border-lightgrey w-48 p-2"
							/>
						</div>
						<div>
							<label
								className="block text-black80 text-sm sm:text-lg"
								htmlFor="phone"
							>
								Phone Number
							</label>
							<input
								id="phone"
								type="text"
								name="phone"
								value={info.phone}
								onChange={handleInfoChange}
								placeholder="Enter phone number"
								className="bg-transparent h-12 sm:h-14 pl-8 border border-lightgrey w-4/5 sm:max-w-80 p-2"
							/>
						</div>
						<div>
							<label
								className="block text-black80 text-sm sm:text-lg"
								htmlFor="name"
							>
								Delivery Address
							</label>
							<textarea
								id="name"
								cols={3}
								rows={5}
								type="text"
								name="address"
								value={info.address}
								onChange={handleInfoChange}
								placeholder="Enter your address"
								className="bg-transparent  resize-none  pl-8 border border-lightgrey w-full p-2"
							/>
						</div>
						<div className="flex gap-5 sm:gap-10">
							<div className="w-full md:w-3/5 sm:w-48">
								<label
									className="block text-black80 text-sm sm:text-lg"
									htmlFor="state"
								>
									State
								</label>
								<input
									id="state"
									name="state"
									value={info.state}
									onChange={handleInfoChange}
									type="text"
									placeholder="Enter your state"
									className="bg-transparent h-12 sm:h-14 pl-8 border text-black80 border-lightgrey w-full p-2"
								/>
							</div>
							<div className="w-full md:w-2/5 sm:max-w-80">
								<label
									className="block text-black80 text-sm sm:text-lg"
									htmlFor="country"
								>
									Country
								</label>
								<input
									id="country"
									type="text"
									name="country"
									value={info.country}
									onChange={handleInfoChange}
									placeholder="Enter Country"
									className="bg-transparent h-12 sm:h-14 pl-8 border border-lightgrey w-full p-2"
								/>
							</div>
						</div>
						<div>
							<Checkbox
								classNames={{
									label: "text-black80 text-sm",
								}}
								className="text-white"
								isSelected={info.saved}
								onValueChange={(value) => {
									setInfo((prev) => {
										return {
											...prev,
											saved: value,
										};
									});
								}}
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
								onPress={() => {
									setInfo({
										name: "",
										phone: "",
										address: "",
										state: "",
										country: "",
										saved: false,
									});
									snackBar("All info cleared", "info");
								}}
							>
								Cancel
							</Button>
							<Button
								size="lg"
								className="text-lg font-medium px-10 text-white"
								color="primary"
								onPress={() => {
									if (Object.values(info).some((item) => item === "")) {
										snackBar("Please fill all information", "info");
									} else {
										snackBar(
											`Info Saved successfully ${
												info.saved ? ", and saved as default" : ""
											}`,
											"success"
										);
									}
								}}
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
									className="block text-black80 text-sm sm:text-lg"
									htmlFor="name"
								>
									Card Name
								</label>
								<input
									id="name"
									name="name"
									value={cardInfo.name}
									onChange={handleCardInfoChange}
									type="text"
									placeholder="Faith Alliyu"
									className="bg-transparent h-12 sm:h-14 pl-8 border text-black80 border-lightgrey w-full p-2"
								/>
							</div>
							<div>
								<label
									className="block text-black80 text-sm sm:text-lg"
									htmlFor="card_number"
								>
									Card Number
								</label>
								<input
									id="card_number"
									name="cardNumber"
									value={cardInfo.cardNumber}
									onChange={handleCardInfoChange}
									type="text"
									placeholder="0000-0000-0000-0000"
									className="bg-transparent h-12 sm:h-14 text-black80 pl-8 border border-lightgrey w-full p-2"
								/>
							</div>
							<div className="flex gap-5 sm:gap-10">
								<div className="w-1/2 md:w-3/5">
									<label
										className="block text-black80 text-sm sm:text-lg"
										htmlFor="exp"
									>
										Card expiry date
									</label>
									<input
										id="exp"
										name="expDate"
										value={cardInfo.expDate}
										onChange={handleCardInfoChange}
										type="text"
										placeholder="10/20"
										className="bg-transparent h-12 text-black80 sm:h-14 pl-8 border border-lightgrey w-full p-2"
									/>
								</div>
								<div className="w-1/2 md:w-2/5">
									<label
										className="block text-black80 text-sm sm:text-lg"
										htmlFor="cvv"
									>
										CVV
									</label>
									<input
										id="cvv"
										name="cvv"
										value={cardInfo.cvv}
										onChange={handleCardInfoChange}
										type="text"
										placeholder="123"
										className="bg-transparent text-black80 h-12 sm:h-14 pl-8 border border-lightgrey w-full p-2"
									/>
								</div>
							</div>
							<Button
								onPress={handleCheckout}
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
