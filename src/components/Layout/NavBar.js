import Link from "next/link";
import Cart from './Cart/Cart';
import { useState } from "react";

const NavBar = () => {
	const [showNav, setShowNav] = useState(false);
	const [menuActive, setMenuActive] = useState(false);
	const showNavigation = () => {
		setShowNav(!showNav);
	};

	const handleCartButton = () => {
		// document.body.style.overflow = 'hidden';
		setMenuActive(true);
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
							href='/HeadphonesPage'
							onClick={showNavigation}
							className='navLink'>
							headphones
						</Link>
					</li>
					<li>
						<Link
							href='/SpeakersPage'
							onClick={showNavigation}
							className='navLink'>
							speakers
						</Link>
					</li>
					<li>
						<Link
							href='/EarphonesPage'
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

			<div className='nav-bar__cart' onClick={handleCartButton}></div>
			<Cart menuActive={menuActive} setMenuActive={setMenuActive} />
		</div>
	);
};

export default NavBar;
