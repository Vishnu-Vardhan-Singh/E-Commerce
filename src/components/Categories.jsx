import { useEffect, useState } from "react";
import { useFetchAllProductsQuery } from "../RTK/createApi";

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
  const [demo,setDemo] = useState(5656)

  console.log(demo)

  if (ctgry) {
    console.log(ctgry);
    return <div className='flex justify-center'>{ctgry.map((val) => (
      <button className="bg-amber-700 rounded-full mx-2 px-3 py-1 cursor-pointer transition-all flex items-center justify-center text-amber-50 hover:bg-amber-300 hover:text-amber-800" onClick={()=>{}} key={val.id}>
        {val.category}
      </button>
    ))}</div>
  }
}
