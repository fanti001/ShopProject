// import { useRouter } from "next/router";
import MainPageProduct from "./MainPageProduct";
import { headphones } from "../../../database";

const ProductDetails = () => {
	// const router = useRouter();
	// const changePage = () => {
	// 	router.push("/" + props.id);
	// };

	// const findProductInDataBase = (title) => {
	// 	headphones.filter((product) => product === product.title);

	// 	return id;
	// };
	return (
		<div className='product-details'>
			{/* {something wrong with the layout of this component } */}
			<MainPageProduct
				title='zx9 speaker'
				graph='product-details__speaker-zx9'
				bgc='speaker-zx9__logo'>
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
				desc='speaker-zx7__desc'>
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
				desc='earphones-yx1__desc'>
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
