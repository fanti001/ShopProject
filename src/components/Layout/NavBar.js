import Link from "next/link";

import { useState } from "react";
const NavBar = () => {
	const [showNav, setShowNav] = useState(false);

	const showNavigation = () => {
		setShowNav(!showNav);
	};
	return (
		<div className='nav-bar'>
			<div onClick={showNavigation} className='nav-bar__menu-button'></div>
			{/* 'navbar-menu' 0*/}
			<nav className={showNav ? "navbar-menu active" : "navbar-menu"}>
				<ul className='menu0-list'>
					<li>
						<Link href='/' onClick={showNavigation} className='navLink'>
							home
						</Link>
					</li>
					<li>
						<Link
							href='/FeaturesPage'
							onClick={showNavigation}
							className='navLink'>
							headphones
						</Link>
					</li>
					<li>
						<Link
							href='/PricingPage'
							onClick={showNavigation}
							className='navLink'>
							speakers
						</Link>
					</li>
					<li>
						<Link
							href='/CommunityPage'
							onClick={showNavigation}
							className='navLink'>
							earphones
						</Link>
					</li>
				</ul>
			</nav>

			<div className='nav-bar__logo'>
				<h1>audiophile</h1>
			</div>

			<div className='nav-bar__cart'></div>
		</div>
	);
};

export default NavBar;
