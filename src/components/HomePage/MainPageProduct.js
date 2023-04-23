import { headphones } from "../../../database";
import { useRouter } from "next/router";
const MainPageProduct = (props) => {
	const router = useRouter();

	const findProduct = () => {
		console.log(props.title);
		const product = headphones.filter(
			(product) => product.title == props.title
		);
		console.log(product);
		const productId = product[0].id;
		router.push("/" + productId);
	};

	return (
		<div className={props.graph}>
			<div className={props.bgc}></div>
			<div className={props.desc ? props.desc : 'products-mobile'}>
				<span>{props.title}</span>
				{props.children}
				<button onClick={findProduct}>see product</button>
			</div>
		</div>
	);
	{
		/* {props.children} */
	}
	{
		/* <button onClick={findProduct}>See Product</button> */
	}
};

export default MainPageProduct;
