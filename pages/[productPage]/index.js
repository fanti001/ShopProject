import {headphones} from '../../database';

const ProductPage = (props) =>{
    return <>
    <p>automatic generation page (inner page) </p>

    <p>product header</p>

    <p>img</p>
    {/* {console.log(headphones)} */}

    <p className='title'>product title {`${props.productData.title}`}</p>
        </>
}

export async function getStaticPaths(){
    
     
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
    }
}


export async function getStaticProps(context){

    // fetch('/api/database',{method: 'GET'}).then(res => console.log(res)).catch();
   
    const productPageId = context.params.productPage;
   console.log(productPageId);
   

   const filteredProduct = headphones.find(product => product.id === productPageId);
   console.log(filteredProduct);

   return {
    props: {
        productData: {
            title:filteredProduct.title,
            id: filteredProduct.id,
            price: filteredProduct.price
        }  
    }
   }
}
export default ProductPage;