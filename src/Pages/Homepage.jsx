import React from "react";
import { Link } from "react-router-dom";
const Homepage =()=>{
    return(
        <div>
        Welcome Homepage
        <p>go to<Link to='/product'>Product</Link></p>
    </div>
    )
}
export default Homepage;