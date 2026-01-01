import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
// import router from "./ReactRouter/eCommerce.jsx";

import router from "./ReactRouter/router";
import { Provider } from "react-redux";
import { store } from "./RTK/Store";
import Category from "./components/Categories";
import { FilterContext } from "./useContext/categoryContext";
import { ProductList } from "./useContext/productsListContext";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ProductList>
      <FilterContext>
        <RouterProvider router={router} />
      </FilterContext>
    </ProductList>
  </Provider>
);
