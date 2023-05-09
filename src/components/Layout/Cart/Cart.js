
import CartProduct from "./CartProduct";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../../store/cartSlice";
import cartSlice from "../../../../store/cartSlice";

const Cart = (
	// { menuActive, setMenuActive }
	) => {

		const dispatch = useDispatch();

	const menuActive = useSelector((state) => state.cartSlice.menuActive);
	const cartStore = useSelector((state) => state.cartSlice.items);
	const { cartTotal, cartShipping, cartVAT, cartGrandTotal } = useSelector((state) => state.cartSlice);

	const handleExitButton = () => {
		document.body.style.overflowY = "scroll";
		// setMenuActive(false);

		dispatch(cartActions.toggleCart())
	};


	return (
		<>
			<div
				className={`${menuActive ? "cart__background--active" : "cart__background--hide"
					}`}
				onClick={handleExitButton}></div>
			<div className={`cart ${menuActive ? "cart--show" : null}`}>
				<span className='cart__sum'>Summary</span>
				<span className='cart__exit'>
					<button onClick={handleExitButton}></button>
				</span>
				<div className='cart__products'>
					{cartStore.map((product) => {
						return (
							<CartProduct
								key={Math.random()}
								title={product.title}
								price={product.price}
								pcs={product.pcs}></CartProduct>

						);
					})}
					{/* <CardProduct />
               <CardProduct />
               <CardProduct />
               <CardProduct />
               <CardProduct />
               <CardProduct />
               <CardProduct />
               <CardProduct />
               <CardProduct /> */}
				</div>
				<div className='cart__total'>
					<span>Total</span>
					<span>${cartTotal}</span>
					<span>Shipping</span>
					<span>${cartShipping}</span>
					<span>Vat(included)</span>
					<span>${cartVAT}</span>
					<span>GrandTotal</span>
					<span>${cartGrandTotal}</span>
					<button>Checkout</button>
				</div>
			</div>
		</>
	);
};

export default Cart;
