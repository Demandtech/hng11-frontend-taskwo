import { useState } from "react";

import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
	Button,
	Image,
} from "@nextui-org/react";
import { Link, useLocation } from "react-router-dom";
import { CartIcon, LogoIcon, SearchIcon, UserIcon } from "../Svgs";
import logo from "../../assets/logo.png";

export default function App() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const location = useLocation();
	const menuItems = [
		{ name: "Home", href: "/" },
		{ name: "About", href: "#" },
		{ name: "Our Products", href: "/products" },
		{ name: "Blog", href: "#" },
	];

	return (
		<Navbar
			isBlurred={false}
			classNames={{
				wrapper: "max-w-full gap-1 sm:gap-5 sm:gap-5 px-2  sm:px-5 md:px-20",
			}}
			className="w-full bg-white"
			onMenuOpenChange={setIsMenuOpen}
		>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="md:hidden"
				/>
				<NavbarBrand>
					<LogoIcon />
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent
				className="hidden md:flex md:gap-8 lg:gap-12"
				justify="center"
			>
				{menuItems.map((item) => {
					return (
						<NavbarItem key={item.name}>
							<Link
								className={`pb-3 px-1  text-lightgrey font-light text-sm transition-all duration-150 ease-linear ${
									location.pathname === item.href
										? "border-b-4 border-primary font-semibold text-primary"
										: ""
								}`}
								to={item.href}
							>
								{item.name}
							</Link>
						</NavbarItem>
					);
				})}
			</NavbarContent>
			<NavbarContent justify="end">
				<div className="hidden md:flex items-center">
					<Button className="items-end pb-1" isIconOnly>
						<SearchIcon />
					</Button>
					<input
						className="border-b placeholder:text-xs py-1 max-w-[100px] border-lightgrey"
						placeholder="search"
					/>
				</div>
				<Link to="/cart" className=" flex items-center gap-2">
					<div className="relative">
						<CartIcon />
						<div className="bg-primary w-2 h-2 rounded-full absolute top-0.5 -right-0.5"></div>
					</div>
					<span className="text-xs text-lightgrey font-light">Cart(2)</span>
				</Link>
				<div>
					<UserIcon />
				</div>
			</NavbarContent>
			<NavbarMenu className="bg-white">
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item.name}`}>
						<Link
							className={` ${
								location.pathname === item.href
									? " text-primary"
									: "text-lightgrey"
							}`}
							to={item.href}
							size="lg"
						>
							{item.name}
						</Link>
					</NavbarMenuItem>
				))}
				<div className="flex items-center">
					<Button className="items-end pb-1" isIconOnly>
						<SearchIcon />
					</Button>
					<input
						className="border-b bg-transparent placeholder:text-xs py-1 max-w-1/2 border-lightgrey"
						placeholder="search"
					/>
				</div>
			</NavbarMenu>
		</Navbar>
	);
}
