import NewProduct from '../src/components/HomePage/NewProduct';
import Products from '../src/components/HomePage/Products';
import ProductDetails from '../src/components/HomePage/ProductDetails';
import Description from '../src/components/HomePage/Description';



function HomePage() {
	return (
		<div
		 className='app'
		 >
			<NewProduct id='01'/>
			<Products />
			<ProductDetails />
			<Description />

		</div>
	);
}

// export async function getStaticProps(context) {
// return {
// 	props: {

// 	}
// }
// }
export default HomePage;

