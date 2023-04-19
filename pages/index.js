import NewProduct from '../src/components/HomePage/NewProduct';
import Products from '../src/components/HomePage/Products';
import ProductDetails from '../src/components/HomePage/ProductDetails';
import Description from '../src/components/HomePage/Description';



function HomePage() {
	return (
		<div className='app'>
			<NewProduct />
			<Products />
			<ProductDetails />
			<Description />

		</div>
	);
}

export default HomePage;
