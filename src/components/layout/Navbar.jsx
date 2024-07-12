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
} from "@nextui-org/react";
import { Link, useLocation } from "react-router-dom";
import {
	CartIcon,
	LogoIcon,
	SearchIcon,
	UserIcon,
	HamburgerIcon,
	CloseIcon,
} from "../Svgs";
import logo from "../../assets/logo.png";
import { useAppContext } from "../../context/AppContext";

export default function App() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { carts } = useAppContext();
	const location = useLocation();
	const menuItems = [
		{ name: "Home", href: "/" },
		{ name: "About", href: "/about" },
		{ name: "Our Products", href: "/products" },
		{ name: "Blog", href: "/blog" },
	];

	console.log(carts)

	return (
		<Navbar
			isBlurred={false}
			classNames={{
				wrapper:
					"max-w-full  gap-1 sm:gap-5 sm:gap-5 px-5  px-5 md:px-10 lg:px-20",
			}}
			className="w-full overflow-hidden   md:py-0 bg-white"
			onMenuOpenChange={setIsMenuOpen}
		>
			<NavbarContent justify="start">
				<NavbarMenuToggle
					icon={<HamburgerIcon />}
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className={` md:hidden`}
				/>
				<NavbarBrand className="hidden md:block">
					<Link to="/">
						<LogoIcon />
					</Link>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent
				className="hidden md:flex md:gap-8 lg:gap-12"
				justify="center"
			>
				{menuItems.map((item) => {
					return (
						<NavbarItem className="hover:text-primary" key={item.name}>
							<Link
								className={`pb-5 px-1 h-full hover:text-primary text-lightgrey font-light text-sm transition-all duration-150 ease-linear ${
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
			<NavbarContent className="gap-3 items-center  md:gap-4" justify="end">
				<div className="hidden md:flex items-center">
					<Button className="items-end pb-1" isIconOnly>
						<SearchIcon />
					</Button>
					<input
						className="border-b placeholder:text-xs py-1 max-w-[100px] border-lightgrey"
						placeholder="search"
					/>
				</div>

				<Button className="md:hidden justify-end" isIconOnly>
					<SearchIcon />
				</Button>
				<Link
					to="/cart"
					className="hidden md:flex md:first-line:flex items-center gap-2"
				>
					<div className="relative">
						<CartIcon />
						<div className="bg-primary w-2 h-2 rounded-full absolute top-0.5 -right-0.5"></div>
					</div>
					<span className="text-xs text-lightgrey font-light">
						Cart({carts?.length})
					</span>
				</Link>
				<div>
					<UserIcon />
				</div>
			</NavbarContent>
			<NavbarMenu className="bg-white p-0 top-0 z-50 bottom-0 min-h-screen ">
				<div className="pb-10 px-5 pt-14">
					<div className="flex mb-10 justify-end">
						<NavbarMenuToggle
							icon={<CloseIcon />}
							aria-label={isMenuOpen ? "Close menu" : "Open menu"}
							className={` md:hidden`}
						/>
					</div>
					<NavbarBrand className="md:hidden">
						<Link to="/">
							<LogoIcon />
						</Link>
					</NavbarBrand>
				</div>
				<div className="space-y-5  mb-5">
					{menuItems.map((item, index) => (
						<NavbarMenuItem className="w-full" key={`${item.name}`}>
							<Link
								className={` ${
									location.pathname === item.href
										? " text-primary font-medium border-r-4 border-primary bg-[#F3F3F3]"
										: "text-lightgrey"
								} w-full block py-3 px-5`}
								to={item.href}
								size="lg"
							>
								{item.name}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
				<Link to="/cart" className="flex md:hidden px-5 items-center gap-2">
					<div className="relative">
						<CartIcon />
						<div className="bg-primary w-2 h-2 rounded-full absolute top-0.5 -right-0.5"></div>
					</div>
					<span className="text-xs text-lightgrey font-light">
						Cart({carts?.length})
					</span>
				</Link>
			</NavbarMenu>
		</Navbar>
	);
}
