import { headphones } from "../../../database";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
const MainPageProduct = (props) => {
	const router = useRouter();
	const [activeAnimation, setActiveAnimation] = useState(false)
	const findProduct = () => {

		const product = headphones.filter(
			(product) => product.title === props.title
		);

		const productId = product[0].id;
		router.push("/" + productId);
	};

	const productEl = useRef(null)

	const getHeightOfElementOnOY = () => {
		if (productEl.current) {
			const product = productEl.current;
			const heightOfElement = Math.floor(product.getBoundingClientRect().top + window.scrollY);
			const heightOfWindow = props.windowY;
			return heightOfWindow >= heightOfElement ? setActiveAnimation(true) : null;
		}
	}

	useEffect(() => {
		getHeightOfElementOnOY();


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
};

export default MainPageProduct;
