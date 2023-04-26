import { useState } from "react";
import CardProduct from './CartProduct'
const Cart = () => {
   const [menuActive, setMenuActive] = useState(false);
   const handleExitButton = () => {
      document.body.style.overflow = 'scroll';
      setMenuActive(true)
   }

   return (
      <div className="cart__background">
         <div className={`cart ${!menuActive ? 'cart--hide' : null}`}>
            <span className="cart__sum">Summary</span>
            <span className="cart__exit"><button onClick={handleExitButton}></button></span>
            <div className="cart__products">
               <CardProduct />
               <CardProduct />
               <CardProduct />
               <CardProduct />
               <CardProduct />
               <CardProduct />
               <CardProduct />
               <CardProduct />
               <CardProduct />
               <CardProduct />
            </div>
            <div className="cart__total">
               <span>Total</span><span>$ 213123123</span>
               <span>Shipping</span><span> $34</span>
               <span>Vat(included)</span><span>$312312</span>
               <span>GrandTotal</span><span>$54545.45</span>
               <button>Checkout</button>
            </div>
         </div>
      </div >
   );
}

export default Cart;