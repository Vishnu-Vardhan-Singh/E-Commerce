<<<<<<< HEAD
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./RTK/store.jsx";
import router from "./ReactRouter/eCommerce.jsx";


createRoot(document.getElementById("root")).render(
  // <Provider store={store}>
  <RouterProvider router={router} />
  // </Provider>
);
=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  { path: '/', element: <App /> }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    
  </StrictMode>
)
>>>>>>> parent of cba6ea2 (search box created)
