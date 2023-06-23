import { useParams,Link } from "react-router-dom";

function ProductDeatils(){
    const params =  useParams();
    
    return(
        <div>
             <h1>Product Details</h1>
             <p>{params.productId}</p>
             <Link to='..' relative="path">Back</Link>

        </div>
    )
}
export default ProductDeatils ; 