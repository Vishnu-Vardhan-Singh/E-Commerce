import { useContext, useEffect, useState } from "react";
import { useFetchAllProductsQuery } from "../RTK/createApi";
import { NavLink } from "react-router-dom";
import { Filter } from "../useContext/categoryContext";

export default function Category() {
  const { data, isError, isLoading } = useFetchAllProductsQuery();

  const { filterVal, setFilterVal } = useContext(Filter);

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
          .map(({ category, id }) => ({ category, id }))
      );
    }
  }, [data]);


  if (ctgry) {
    return (<div className="flex justify-around bg-yellow-200 py-4">
      <div className="flex justify-center">
        <button
          className="bg-indigo-500 h-8 shadow-[-5px_-5px_21px_-5px_rgba(59,_130,_246,_1)] rounded-full mx-2 px-3 py-1 cursor-pointer transition-all flex items-center justify-center text-amber-50 hover:bg-amber-100 hover:text-amber-800"
          onClick={(e) => {
            console.log(e.target.value);
            setFilterVal(()=>e.target.value)
          }}
          value="All"
        >
          All
        </button>
        {ctgry.map((val) => (
          <button
            className="overflow-hidden text-nowrap bg-indigo-500 h-8 shadow-[-5px_-5px_21px_-5px_rgba(59,_130,_246,_1)]   rounded-full mx-2 px-3 py-1 cursor-pointer transition-all flex items-center justify-center text-amber-50 hover:bg-amber-100 hover:text-amber-800"
            onClick={(e) => {
              console.log(e.target.value);
              setFilterVal(()=>e.target.value)
            }}
            key={val.id}
            value={val.category}
          >
            {val.category}
          </button>
        ))}
      </div>
      <select className='border-2 hover:shadow-l shadow-amber-950 hover:cursor-pointer' onClick={(e)=>{console.log(e.target.value)}}>
        <option value = 'PLH'>Price : Low to High</option>
        <option value = 'PHL'>Price : High to Low</option>
        <option value = 'RLH'>Rating : Low to High</option>
        <option value = 'RHL'>Rating : High to Low</option>
      </select>
      </div>
    );
  }
}
