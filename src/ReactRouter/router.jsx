import { createBrowserRouter } from "react-router-dom";
import App from "../components/App";
import Home from "../components/Home";
import Wishlist from "../components/Wishlist";
import Cart from "../components/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
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
