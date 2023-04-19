// import Map from "../src/components/Map";

import NewProduct from '../src/components/HomePage/NewProduct';
import Products from '../src/components/HomePage/Products';
import ProductDetails from '../src/components/HomePage/ProductDetails';
//unused at the moment 
// import Newsletter from '../src/components/Newsletter';
// import ProductsSoon from '../src/components/ProductsSoon';


function HomePage() {
	return (
		<div className='app'>
			<NewProduct />
			<Products />
			<ProductDetails />
			{/* 
		 unused at the moment
		 <Newsletter />
         <ProductsSoon /> */}
			{/* <Map /> */}
		</div>
	);
}

export default HomePage;
