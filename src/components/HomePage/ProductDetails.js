// import { useRouter } from "next/router";
import MainPageProduct from "./MainPageProduct";
import { useEffect, useState } from "react";
const ProductDetails = () => {
	// const router = useRouter();
	// const changePage = () => {
	// 	router.push("/" + props.id);
	// };

	// const findProductInDataBase = (title) => {
	// 	headphones.filter((product) => product === product.title);

	// 	return id;
	// };
	const [windowY, setWindowY] = useState(0)

	const scrollYHandler = () => {
		setWindowY(window.scrollY + window.innerHeight)

	}


	useEffect(() => {
		window.addEventListener('scroll', scrollYHandler);
		window.addEventListener('resize', scrollYHandler);
		return () => {
			window.removeEventListener("scroll", scrollYHandler);
			window.removeEventListener("resize", scrollYHandler);
		}

	})
	return (
		<div className='product-details'>
			{/* {something wrong with the layout of this component } */}
			<MainPageProduct
				title='zx9 speaker'
				graph='product-details__speaker-zx9'
				bgc='speaker-zx9__logo'
				windowY={windowY}
				animationDuration='1s'
			>
				{/* <div className='product-details__speaker-zx9'>
					<div className='speaker-zx9__logo'></div>
					<span>zx9 speaker</span>
					<p>
						Upgrade to premium speakers that are phenomenally built to deliver
						truly remarkable sound.
					</p>
				</div> */}
				<p>
					Upgrade to premium speakers that are phenomenally built to deliver
					truly remarkable sound.
				</p>
			</MainPageProduct>

			<MainPageProduct
				title='zx7 speaker'
				graph='product-details__speaker-zx7'
				bgc='speaker-zx7__background'
				desc='speaker-zx7__desc'
				windowY={windowY}
				animationDuration='1.2s'>
				{/* <div className='product-details__speaker-zx7'>
				<div className='speaker-zx7__background'></div>
				<div className='speaker-zx7__desc'>
					<span>zx7 speaker</span>
					<button >see product</button>
				</div>
			</div>  */}
			</MainPageProduct>

			<MainPageProduct
				title='yx1 earphones'
				graph='product-details__earphones-yx1'
				bgc='earphones-yx1__bg'
				desc='earphones-yx1__desc'
				windowY={windowY}
				animationDuration='1.5s'>
				{/* <div className='product-details__earphones-yx1'>
					<div className='earphones-yx1__bg'></div>

					<div className='earphones-yx1__desc'>
						<span>yx1 earphones</span>
						<button>see product</button>
					</div>
				</div> */}
			</MainPageProduct>

			{/* { previous layout of this page !!!!!!!!! } */}
			{/* <div className='product-details__speaker-zx9'>
				<div className='speaker-zx9__logo'></div>
				<span>zx9 speaker</span>
				<p>
					Upgrade to premium speakers that are phenomenally built to deliver
					truly remarkable sound.
				</p>
				<button onClick={changePage}>see product</button>
			</div> */}

			{/* <div className='product-details__speaker-zx7'>
				<div className='speaker-zx7__background'></div>
				<div className='speaker-zx7__desc'>
					<span>zx7 speaker</span>
					<button>see product</button>
				</div>
			</div> */}

			{/* <div className='product-details__earphones-yx1'>
				<div className='earphones-yx1__bg'></div>

				<div className='earphones-yx1__desc'>
					<span>yx1 earphones</span>
					<button>see product</button>
				</div>
			</div> */}
		</div>
	);
};

export default ProductDetails;
