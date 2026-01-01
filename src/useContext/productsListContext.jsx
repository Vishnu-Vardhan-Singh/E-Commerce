import { createContext } from "react";

export const PrdctList = createContext(null);

export function ProductList({ children }) {
  const [productsList, setProductsList] = useState(null);

  return (
    <PrdctList.Provider value={{ productsList, setProductsList }}>
      {children}
    </PrdctList.Provider>
  );
}
