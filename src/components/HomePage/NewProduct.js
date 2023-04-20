import { useRouter } from "next/router";
const NewProduct = (props) => {
	const router = useRouter();

	const changePage = () =>{
	console.log('clicked');
	}
	return (
		<div className='new-product'>
			<div className='new-product__headphones'></div>
			<div>new product</div>
			<h2>xx99 mark ii headphone</h2>
			<p>
				Experience natural, lifelike audio and exceptional build quality made
				for the passionate music enthusiast.
			</p>
			<button
				onClick={changePage}>
				See product
			</button>
		</div>
	);
};

export default NewProduct;
