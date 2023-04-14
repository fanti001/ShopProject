
const Product = (props) => {
   return (
      <div className="product">
         <div className="product__logo" style={{ backgroundImage: `url(${props.productLogo.src})` }}>
            <div></div>
         </div>
         <span className="product__name">{props.productName}</span>
         <a>Shop<span></span></a>
      </div>
   );
}

export default Product;