// import Map from "../src/components/Map";

import NewProduct from '../src/components/NewProduct';
import Products from '../src/components/Products';
//unused at the moment 
// import Newsletter from '../src/components/Newsletter';
// import ProductsSoon from '../src/components/ProductsSoon';

function HomePage() {
	return (
		<div className='app'>
			<NewProduct />
         <Products />
		
         {/* 
		 unused at the moment
		 <Newsletter />
         <ProductsSoon /> */}
			{/* <Map /> */}
		</div>
	);
}

export default HomePage;
