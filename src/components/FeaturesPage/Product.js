
const Product = (props) => {
   return (
      <div className="product">
         <div className="product__logo" style={{ backgroundImage: `url(${props.productLogo.src})` }}>

         </div>
         <span className="product__name">{props.productName}</span>
         <button className="product__button">
            Shop
            <span></span>
         </button>
      </div>
   );
}

export default Product;