import { useDispatch } from "react-redux";
import { useFetchAllProductsQuery } from "../RTK/createApi";
import Loading from "./Loading";
import { setCart, setWishlist } from "../RTK/createSlice";
import { FaSearch } from "react-icons/fa";

export default function Home() {
  const { data, isError, isLoading } = useFetchAllProductsQuery();
  const dispatch = useDispatch()

  console.log(data);

  if (isLoading) {
    return <Loading />;
  } else if (isError) {
    return <p>There is somthing wrong.</p>;
  }

  return (
    <>
      <div className="flex flex-wrap justify-evenly item bg-orange-400 border-black border shadow-lg">
        {data.map((val, ind, arr) => {
          return (
            <div key={val.id} className="w-50 h-70.5 my-2 rounded-2xl border-2 flex flex-wrap items-end bg-white hover:cursor-pointer ">
                <div className=" h-[50%] w-full mx-1" >
                    <img src={val.image} alt=""  className='object-contain h-full w-full'/></div>
              
              <div className='w-full mx-1'>
                <div className="h-12 overflow-hidden">
                  <p className="font-bold ... " title={val.title}>{val.title}</p>
                </div>

                <p>Price : {val.price}</p>
                <p>Rating : {val.rating.rate}</p>
                <div className="flex  text-[12px] justify-evenly w-full mb-1 *:hover:cursor-pointer">
                  <button onClick={()=>{dispatch(setCart(val))}} className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                    Add Cart
                  </button>
                  <button onClick={()=>{dispatch(setWishlist(val))}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                    Add Wishlist
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
