
import CartProduct from "./CartProduct";
import Blocker from "../Blocker";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../../store/cartSlice";

const Cart = (
) => {

	const dispatch = useDispatch();

	const cartActive = useSelector((state) => state.cartSlice.cartActive);
	const cartStore = useSelector((state) => state.cartSlice.items);
	const { cartTotal, cartShipping, cartVAT, cartGrandTotal } = useSelector((state) => state.cartSlice);

	const handleExitButton = () => {
		document.body.style.overflowY = "scroll";

		dispatch(cartActions.toggleCart())
	};


	return (
		<>
			<Blocker active={cartActive} hideBlocker={handleExitButton}></Blocker>
			<div className={`cart ${cartActive ? "cart--show" : null}`}>
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
