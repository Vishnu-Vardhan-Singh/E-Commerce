import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Router Page/Home";
import App from "../components/Router Page/App";
import Cart from "../components/Router Page/Cart";
import Wishlist from "../components/Router Page/Wishlist";
import Banner from "../components/Banner";
import Category from "../components/Categories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        index: true,
        element: <><Category/><Banner/><Home /></>,
      },
      {
        path: "wishlist",
        element: <Wishlist/>,
        caseSensitive: true // its default value is "false" and if you set it true then value of "to" from "NavLink" should always match the "path" value with case sensitive behaviour
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

export default router;
