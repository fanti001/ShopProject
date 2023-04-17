import Product from './Product'
import ProductHeadphones from '../../../public/assets/product-headphones.png'
import ProductSpeaker from '../../../public/assets/product-speaker.png'
import ProductEarphones from '../../../public/assets/product-earphones.png'

const Products = () => {
   return (
      <div className="products">
         <Product productLogo={ProductHeadphones} productName="headphones" />
         <Product productLogo={ProductSpeaker} productName="speakers" />
         <Product productLogo={ProductEarphones} productName="earphones" />

      </div>
   );
}

export default Products;