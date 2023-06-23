import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Productpage from "./Pages/Productpage";
import Root from "./Pages/Root";
import ErrorPage from "./Pages/Error";
import ProductDeatils from "./Pages/ProductDeatils";

function App() {
  //  const routeDefinition = createRoutesFromElements(
  //   <Route>
  //     <Route path="/" element={<Homepage />} />
  //     <Route path="/product" element={<Productpage />} />
  //   </Route>
  //  );
 const router =  createBrowserRouter([
  {
    path:'/',
    errorElement:<ErrorPage />,
    element:<Root />,
    children:[
      {index:true,element:<Homepage />},
      {path:'/product',element:<Productpage />},
      {path:'/product/:productId',element:<ProductDeatils />}
    ]
  }
  
  ]);

// const router = createBrowserRouter(routeDefinition);
  return <div>
    <RouterProvider router={router} />
  </div>;
}

export default App;
