import Product from './Product'
import ProductHeadphones from '../../public/assets/product-headphones.png'

const Products = () => {
   return (
      <div className="products">
         <Product productLogo={ProductHeadphones} productName="headphones" />
         <Product productLogo="logo" productName="headphones" />
         <Product productLogo="logo" productName="headphones" />

      </div>
   );
}

export default Products;