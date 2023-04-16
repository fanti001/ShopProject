
const Product = (props) => {
   return (
      <div className="product">
         <div className="product__logo" style={{ backgroundImage: `url(${props.productLogo.src})` }}>

         </div>
         <span className="product__name">{props.productName}</span>
         <div className="product__button">
            <a>Shop</a>
            <span></span>
         </div>
      </div>
   );
}

export default Product;