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
          .map(({ category }) => category)
      );
    }
  }, [data]);
  if(ctgry){console.log(ctgry);
    return ctgry.map((val)=><button className='bg-amber-200 mx-2 px-2 py-1 cursor-pointer transition-all '>{val}</button>)

  }
  

  
}
