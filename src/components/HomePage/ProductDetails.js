import { useRouter } from "next/router";

const ProductDetails = () => {
const router = useRouter()
   const changePage = () =>{
router.push()
   }
   return (
      <div className="product-details">
         <div className="product-details__speaker-zx9">
            <div className="speaker-zx9__logo">

            </div>
            <span>zx9 speaker</span>
            <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
            <button>see product</button>
         </div>

         <div className="product-details__speaker-zx7">
            <div className="speaker-zx7__background"></div>
            <div className="speaker-zx7__desc">
               <span>zx7 speaker</span>
               <button>see product</button>
            </div>
         </div>

         <div
            className="product-details__earphones-yx1">
            <div className="earphones-yx1__bg">

            </div>

            <div className="earphones-yx1__desc">
               <span>yx1 earphones</span>
               <button>see product</button>
            </div>
         </div>

      </div>
   );
}

export default ProductDetails;