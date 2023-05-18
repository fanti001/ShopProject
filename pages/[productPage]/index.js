import { headphones } from "../../database";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

const ProductPage = (props) => {

	// const cartVisible = useSelector(state => state.cartSlice.menuActive);
	// const cartState = useSelector((state) => state.cartSlice.items);

	const dispatch = useDispatch();
	const addProduct = () => {
		dispatch(
			cartActions.addProductToCart({
				title: props.productData.title,
				id: props.productData.id,
				price: props.productData.price,
				pcs: 1
			})
		);
		dispatch(cartActions.totalCounter())
		dispatch(cartActions.vatCounter());
		dispatch(cartActions.grandTotalCounter());
		// dispatch(cartActions.toggleCart())

	};



	// useEffect(
	// 		()=>{
	// 			setTimeout(()=>{
	// 				cartVisible && dispatch(cartActions.toggleCart())
	// 			},2000)
	// 			clearTimeout()

	// 	}
	// ) 

	return (
		<>
			<div className='product__header'>
				<div className='product__header-img'></div>
				<div className='product__header-text'>
					<p className="product__header-text-newProduct">New Product</p>
					<h2 className="product__header-text-title">{props.productData.title}</h2>
					<p className="product__header-text-description">{props.productData.shortDescription}</p>
					<p className="product__header-text-price">${props.productData.price}</p>
					<div className='product__header-buttons'>
						<input placeholder="1" className="product__header-input" type="number" />
						<button
							className="product__header-addBtn"
							onClick={addProduct}
						>add product
						</button>
					</div>
				</div>
			</div>

			<div className="features">
				<div className="features__description">
					<h3>Features</h3>
					<p></p>
				</div>
				<h3>In the Box</h3>
				<ul>
					<li><span>1x</span>headphones Unit</li>
					<li><span>2x</span>Replacement Earcups</li>
					<li><span>1x</span>User Manual</li>
				</ul>
			</div>

			{/* <p>automatic generation page (inner page) </p> */}

			{/* <p>product header</p>
			<p>img</p> */}
			{/* {console.log(headphones)} */}

			{/* <h2 className='title'>product title {`${props.productData.title}`}</h2> */}

			{/* <button onClick={addProduct}>add product</button>
			{console.log(cartState)} */}
		</>
	);
};

export async function getStaticPaths() {
	return {
		fallback: false,
		paths: headphones.map((headphone) => ({
			params: { productPage: headphone.id },
		})),
		// paths: [
		//     	{
		//     		params: {
		//     			productPage: "01",
		//     		},
		//     	},
		//     	{
		//     		params: {
		//     			productPage: "02",
		//     		},
		//     	},
		//     	{
		//     		params: {
		//     			productPage: "03",
		//     		},
		//     	},

		//     ],
		// dataArr.map((post) => ({
		// 	params: {
		// 		postId: post.id.toString(),
		// 	},
		// })),
	};
}

export async function getStaticProps(context) {
	// fetch('/api/database',{method: 'GET'}).then(res => console.log(res)).catch();

	const productPageId = context.params.productPage;
	// console.log(productPageId);

	const filteredProduct = headphones.find(
		(product) => product.id === productPageId
	);
	// console.log(filteredProduct);

	return {
		props: {
			productData: {
				title: filteredProduct.title,
				id: filteredProduct.id,
				shortDescription: filteredProduct.shortDescription,
				longDescription: filteredProduct.longDescription,
				price: filteredProduct.price,
			},
		},
	};
}
export default ProductPage;
