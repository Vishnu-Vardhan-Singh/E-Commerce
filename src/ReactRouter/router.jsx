import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Router Page/Home";
import App from "../components/Router Page/App";
import Banner from "../components/Banner";
import Category from "../components/Categories";
import Navbar from "../components/Navbar";
import { ProductList } from "../useContext/productsListContext";
import { lazy, Suspense } from "react";
const Wishlist = lazy(() => import("../components/Router Page/Wishlist"));
const Profile = lazy(() => import("../components/Router Page/Profile"));
const Cart = lazy(() => import("../components/Router Page/Cart"));

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
        path: "men's clothing",
        element: <div>men's clothing</div>,
      },
      {
        path: "jewelery",
        element: <div>jewelery</div>,
      },
      {
        path: "electronics",
        element: <div>electronics</div>,
      },
      {
        path: "women's clothing",
        element: <div>women's clothing</div>,
      },
    ],
  },
  {
    path: "wishlist",
    element: (
      <>
        <Navbar />
        <Suspense fallback={<h1>Loading...</h1>}>
          {" "}
          <Wishlist />
        </Suspense>
        {/* <Wishlist /> */}
      </>
    ),
    caseSensitive: true, // its default value is "false" and if you set it true then value of "to" from "NavLink" should always match the "path" value with case sensitive behaviour
  },
  {
    path: "cart",
    element: (
      <>
        <Navbar />
        <Suspense fallback={<p>Loading...</p>}>
          <Cart />{" "}
        </Suspense>
      </>
    ),
  },
  {
    path: "profile",
    element: (
      <>
        <Navbar />
        <Suspense fallback="Loading...">
          <Profile />
        </Suspense>
      </>
    ),
  },
]);

export default router;
