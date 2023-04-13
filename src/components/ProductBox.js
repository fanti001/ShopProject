import image from '../assets/product-1.jpg'

const classDiscount = "price-discount"
const handleClick = () => { alert('klik')}
const cena = "345 PLN"
const ProductBox = () => {
	return (
		<>
		<div className='product-box'>
				{/*<img src={image} alt={image} className='product-image' onClick={function (){alert('ktoś kliknął')}}/>*/}
				{/*<img src={image} alt={image} className='product-image' onClick={ () => alert('ktoś kliknął') }/>*/}
				<img src={image} alt={image} className='product-image' onClick={ handleClick }/>
			<div className='short-desc'>
				<p>Short description about product...</p>
			</div>
			<div className='price-box'>
				{/*<span className='price-discount'>567</span>*/}
				<span className={classDiscount}>567</span>
				<span className='price-normal'>{ cena }</span>
			</div>
		</div>
		</>);
}

export default ProductBox;
