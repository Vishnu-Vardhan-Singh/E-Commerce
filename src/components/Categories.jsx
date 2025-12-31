import { useEffect, useState } from "react";
import { useFetchAllProductsQuery } from "../RTK/createApi";
import { NavLink } from "react-router-dom";

export default function Category() {
  const { data, isError, isLoading } = useFetchAllProductsQuery();

  const [ctgry, setCtgry] = useState();
  useEffect(() => {
    let arr2 = [];
    if (!isLoading) {

      setCtgry(
        data
          .filter(({ category }) => {
            if (!arr2.includes(category)) {
              arr2.push(category);
              return true;
            }
            return false;
          })
          .map(({ category,id }) => ({category,id}))
      );

    }
    
  }, [data]);

  if (ctgry) {
    return <div className='flex justify-center'><NavLink to={`/`} className="bg-amber-700 rounded-full mx-2 px-3 py-1 cursor-pointer transition-all flex items-center justify-center text-amber-50 hover:bg-amber-300 hover:text-amber-800" onClick={()=>{}}>
        All
      </NavLink >{ctgry.map((val) => (
      <NavLink to={`/${val.category}`} className="bg-amber-700 rounded-full mx-2 px-3 py-1 cursor-pointer transition-all flex items-center justify-center text-amber-50 hover:bg-amber-300 hover:text-amber-800" onClick={()=>{}} key={val.id}>
        {val.category}
      </NavLink >
    ))}</div>
  }
}
