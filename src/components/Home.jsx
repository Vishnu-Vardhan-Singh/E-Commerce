import { useFetchAllProductsQuery } from "../RTK/createApi";
import Loading from "./Loading";
export default function Home() {
  const { data, isError, isLoading } = useFetchAllProductsQuery();

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
            <div key={val.id} className="w-[200px] h-[300px] my-2 rounded-2xl border-2 flex flex-wrap items-end bg-white hover:cursor-pointer ">
                <div className=" h-[50%] w-full mx-1" >
                    <img src={val.image} alt=""  className='object-contain h-full w-full'/></div>
              
              <div className='w-full mx-1'>
                <div className="h-[48px] overflow-hidden">
                  <p className="font-bold ... " title={val.title}>{val.title}</p>
                </div>

                <p>Price : {val.price}</p>
                <p>Rating : {val.rating.rate}</p>
                <div className="flex  text-[12px] justify-evenly w-full mb-1 [&>*]:hover:cursor-pointer">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ">
                    Add Cart
                  </button>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
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
