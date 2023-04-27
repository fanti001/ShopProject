const CartProduct = (props) => {
   return (
      <div className="cart-product">
         <div className="cart-product__image"></div>
         <span>{props.title}</span>
         <span>{props.price}</span>
         <span>x1</span>
      </div>
   );
}

export default CartProduct;