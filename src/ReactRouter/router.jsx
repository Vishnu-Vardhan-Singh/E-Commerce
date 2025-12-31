import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Router Page/Home";
import App from "../components/Router Page/App";
import Cart from "../components/Router Page/Cart";
import Wishlist from "../components/Router Page/Wishlist";
import Banner from "../components/Banner";
import Category from "../components/Categories";
import Navbar from "../components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <>
            <Banner />
            <Home />
          </>
        ),
      },
      {
        path:"men's clothing",
        element:<div>men's clothing</div>
      }
      ,
      {
        path:"jewelery",
        element:<div>jewelery</div>
      }
      ,
      {
        path:"electronics",
        element:<div>electronics</div>
      }
      ,
      {
        path:"women's clothing",
        element:<div>women's clothing</div>
      }
    ],
  },
  {
    path: "wishlist",
    element: (
      <>
        <Navbar />
        <Wishlist />
      </>
    ),
    caseSensitive: true, // its default value is "false" and if you set it true then value of "to" from "NavLink" should always match the "path" value with case sensitive behaviour
  },
  {
    path: "cart",
    element: (
      <>
        <Navbar />
        <Cart />
      </>
    ),
  },
]);

export default router;
