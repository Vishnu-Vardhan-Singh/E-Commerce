import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
// import router from "./ReactRouter/eCommerce.jsx";
import App from "./App";
import router from "./ReactRouter/router";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
  // <App/>
);

