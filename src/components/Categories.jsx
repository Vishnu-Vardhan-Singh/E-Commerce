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
    return (
      <div className="flex justify-center">
        <button
          className="bg-amber-700 rounded-full mx-2 px-3 py-1 cursor-pointer transition-all flex items-center justify-center text-amber-50 hover:bg-amber-300 hover:text-amber-800"
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
            className="bg-amber-700 rounded-full mx-2 px-3 py-1 cursor-pointer transition-all flex items-center justify-center text-amber-50 hover:bg-amber-300 hover:text-amber-800"
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
    );
  }
}
