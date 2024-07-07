import React from "react";
import {
	LogoIcon,
	TwitterLogo,
	InstagramLogo,
	YoutubeLogo,
	FacebookLogo,
	FooterLogo,
} from "../Svgs";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="bg-black90 py-5  px-2  sm:px-5 md:px-12">
			<div className="flex flex-col text-white py-10 lg:items-center lg:flex-row gap-7 lg:gap-16">
				<div className="">
					<div className="mb-10">
						<FooterLogo location="footer" color="#ffffff" />
						<p className="font-extralight mt-2 ">
							We are dedicated to helping improve your cooking experience
						</p>
					</div>
					<h4 className="font-semibold text-lg mb-5">Our Socials</h4>
					<div className="flex gap-3 items-center">
						<FacebookLogo />
						<InstagramLogo />
						<TwitterLogo />
						<YoutubeLogo />
					</div>
				</div>
				<div className="flex flex-col lg:flex-row gap-7 lg:gap-16">
					<div className="flex-1">
						<h4 className="font-semibold text-2xl mb-5">Navigation</h4>
						<ul className="font-extralight space-y-3 md:space-y-5">
							<li>
								<Link>Home</Link>
							</li>
							<li>
								<Link>About</Link>
							</li>
							<li>
								<Link>Our Products</Link>
							</li>
							<li>
								<Link>Blog</Link>
							</li>
						</ul>
					</div>
					<div className="flex-1">
						<h4 className="font-semibold text-2xl mb-5 whitespace-normal">
							Contact Us
						</h4>
						<div className="font-extralight space-y-3 md:space-y-5">
							<p>
								13, Muhammed Ahmadu Way, Oshore Estate, Lekki Expressway, Lagos,
								Nigeria.
							</p>
							<p>cookware@email.org</p>
							<p>+234 8000 4565 34</p>
						</div>
					</div>
					<div className="flex-1">
						<h4 className="font-semibold text-2xl mb-5 whitespace-nowrap">
							{" "}
							Opening Hours
						</h4>
						<div className="font-extralight space-y-3">
							<p>Mon-Fri 8:00am-7:00pm</p>
							<p>Sat-Sun: 12:00am-6:00pm</p>
						</div>
					</div>
				</div>
			</div>
			<div className="text-center">
				<span className="text-white font-extralight text-xs">Copyright © 2024 Acookware</span>
			</div>
		</div>
	);
};

export default Footer;
