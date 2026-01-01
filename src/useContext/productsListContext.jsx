import { createContext, useState } from "react";

export const PrdctList = createContext(null);

export function ProductList({ children }) {
  const [productsList, setProductsList] = useState([]);

  return (
    <PrdctList.Provider value={{ productsList, setProductsList }}>
      {children}
    </PrdctList.Provider>
  );
}
