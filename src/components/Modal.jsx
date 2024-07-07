import React from "react";
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	useDisclosure,
	Image,
} from "@nextui-org/react";
import confirmImg from "../assets/confirm.png";

export default function MyModal({ isOpen, onOpenChange }) {
	return (
		<>
			{/* <Button onPress={onOpen}>Open Modal</Button> */}
			<Modal
				// size="sm"
				className="bg-white"
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				placement="center"
				backdrop="opaque"
				classNames={{
					backdrop:
						"bg-[#5C5C5C]/70",
				}}
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalBody className="py-10 px-20">
								<Image src={confirmImg} />
								<div className="text-center mt-3">
									<h5 className="font-semibold text-lg">Congratulations!</h5>
									<p className="text-black80">Your Order has been confirmed</p>
								</div>
							</ModalBody>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}
