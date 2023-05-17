import { headphones } from "../../../database";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
const MainPageProduct = (props) => {
	const router = useRouter();
	const [activeAnimation, setActiveAnimation] = useState(false)
	const findProduct = () => {

		const product = headphones.filter(
			(product) => product.title == props.title
		);

		const productId = product[0].id;
		router.push("/" + productId);
	};

	const productEl = useRef(null)

	useEffect(() => {
		if (productEl.current) {
			const product = productEl.current;
			props.windowY >= Math.floor(product.getBoundingClientRect().top + window.scrollY) ? setActiveAnimation(true) : null;
		}

	})

	return (

		<div ref={productEl} className={`${props.graph} ${activeAnimation ? 'animation--active' : null}`}
			style={{
				animationDuration: `${props.animationDuration}`
			}}>
			<div className={props.bgc}></div>
			<div className={props.desc ? props.desc : 'products-mobile'}>
				<span>{props.title}</span>
				{props.children}
				<button onClick={findProduct}>see product</button>
			</div>
		</div >
	);
	{
		/* {props.children} */
	}
	{
		/* <button onClick={findProduct}>See Product</button> */
	}
};

export default MainPageProduct;
