import Navbar from "./Navbar";

const CartLayout = ({ children }) => {
	return (
		<div className="max-w-[1440px] mx-auto ">
			<Navbar />
			<div className="bg-[#f1f1f1]">{children}</div>
		</div>
	);
};

export default CartLayout;
