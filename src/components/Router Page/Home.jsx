import { useDispatch } from "react-redux";
import { useFetchAllProductsQuery } from "../../RTK/createApi";
import { setCart, setWishlist } from "../../RTK/createSlice";
import Loading from "../Loading";
import Buybtn from "../Buybtn";
import Wishbtn from "../Wishbtn";
import { useContext } from "react";
import { Filter } from "../../useContext/categoryContext";

export default function Home() {
  const { data, isError, isLoading } = useFetchAllProductsQuery();
  const { filterVal, setFilterVal } = useContext(Filter);

  if (isLoading) {
    return <Loading />;
  } else if (isError) {
    return <p>There is somthing wrong.</p>;
  }

  console.log(
    data.filter((val) => {
      if (val.category === "All") {
        return true;
      } else if (val.category === filterVal) {
        return true;
      }
    })
  );
  return (
    <>
      <div className="flex flex-wrap justify-evenly item bg-orange-400 border-black border shadow-lg">
        {data
          .filter((val) => {
            if (filterVal === 'All') {
              return true;
            } else if (val.category === filterVal) {
              return true;
            }
          })
          .map((val, ind, arr) => {
            return (
              <div
                key={val.id}
                className="w-50 h-70.5 my-2 rounded-2xl border-2 flex flex-wrap items-end bg-white hover:cursor-pointer "
              >
                <div className=" h-[50%] w-full mx-1">
                  <img
                    src={val.image}
                    alt=""
                    className="object-contain h-full w-full"
                  />
                </div>

                <div className="w-full mx-1">
                  <div className="h-12 overflow-hidden">
                    <p className="font-bold ... " title={val.title}>
                      {val.title}
                    </p>
                  </div>

                  <p>Price : {val.price}</p>
                  <p>Rating : {val.rating.rate}</p>
                  <div className="flex  text-[12px] justify-evenly w-full mb-1 *:hover:cursor-pointer">
                    <Buybtn val={val}>Add Cart</Buybtn>

                    <Wishbtn val={val}>Add Wishlist</Wishbtn>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
