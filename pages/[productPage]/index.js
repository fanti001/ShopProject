const ProductPage = (props) =>{
    return <>
    <p>automatic generation page (inner page) </p>

    <p>product header</p>

    <p>img</p>

    <p>product title {`${props.productData.title}`}</p>
        </>
}

export async function getStaticPaths(){
    return {
		fallback: false,
		paths: [
            	{
            		params: {
            			productPage: "01",
            		},
            	},
            	
            ],
        // dataArr.map((post) => ({
		// 	params: {
		// 		postId: post.id.toString(),
		// 	},
		// })),
    }
}


export async function getStaticProps(context){
    const productPageId = context.params.productPage;
   console.log(productPageId);

   return {
    props: {
        productData: {
            title: 'selectedTitle',
            id: 'selectedId',
            price: 'selected product price'
        }  
    }
   }
}
export default ProductPage;