import Link from "next/link";
import Cart from './Cart/Cart';
import Blocker from "./Blocker";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/cartSlice";
import cartSlice from "../../../store/cartSlice";

const NavBar = () => {

	const dispatch = useDispatch();
	const { cartActive, items } = useSelector(state => state.cartSlice)
	const [showNav, setShowNav] = useState(false);
	const [circleActive, setCircleActive] = useState(false);
	const [itemsPCS, setItemsPCS] = useState(0);

	const showNavigation = () => {
		setShowNav(!showNav);
	};

	const handleCartButton = () => {
		dispatch(cartActions.toggleCart())
	};

	const counterItems = () => {
		if (items.length >= 1) {
			setItemsPCS(items.reduce((prev, next) => {
				return prev + next.pcs
			}, 0))
		}

	}
	let circleAnimation;
	const circleHandler = () => {
		console.log(itemsPCS)
		setCircleActive(true);
		circleAnimation = setTimeout(() => setCircleActive(false), 300);
	}

	useEffect(() => {
		counterItems()
		if (items.length > 0) { circleHandler(); }

	}, [items])

	useEffect(() => {
		return () => {
			clearTimeout(circleAnimation);
		}
	}, [circleActive])


	return (
		<>

			<div className='nav-bar'>
				<Blocker active={showNav} hideBlocker={() => {
					setShowNav(false)
				}}></Blocker>
				<div onClick={showNavigation} className={!showNav ? 'nav-bar__menu-button' : 'nav-bar__menu-button nav-bar__menu-button--active'}></div>
				{/* 'navbar-menu' 0*/}
				<nav className={showNav ? "navbar-menu active" : "navbar-menu"}>
					<ul className='menu-list'>
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

				<div className='nav-bar__cart' onClick={handleCartButton}>
					{itemsPCS >= 1 ? <span className={circleActive ? `cart-circle cart-circle--active` : `cart-circle`}>{itemsPCS}</span> : null}
				</div>
				<Cart />
			</div>
		</>
	);
};

export default NavBar;
