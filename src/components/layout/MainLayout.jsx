import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
Footer;

const MainLayout = ({ children }) => {
	return (
		<div className="max-w-[1440px] mx-auto ">
			<Navbar />
			<div className="bg-[#f1f1f1]">{children}</div>
			<Footer />
		</div>
	);
};

export default MainLayout;
