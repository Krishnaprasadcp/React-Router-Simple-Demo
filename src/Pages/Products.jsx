import { Link } from "react-router-dom";

const PRODUCTS=[
    {id:'p1',title:'Product1'},
    {id:'p2',title:'Product2'},
    {id:'p3',title:'Product3'}
]
function Products (){

    return <>
        <h1>The Products Page</h1>
        <ul>
        {PRODUCTS.map(item=>(
            <li key={item.id}>
                <Link to={`/product/${item.id}`}>{item.title}</Link>
            </li>
        ))}
        </ul>
    </>
}
export default Products;