import { createContext, useState } from "react";

export const Filter = createContext(null);

export function FilterContext({ children }) {
  const [filterVal, setFilterVal] = useState('Vishnu');
  return (
    <Filter.Provider value={{ filterVal, setFilterVal }}>
      {children}
    </Filter.Provider>
  );
}
