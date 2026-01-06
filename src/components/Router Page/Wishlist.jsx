import { useDispatch, useSelector } from "react-redux";
import { removeWishItem } from "../../RTK/createSlice";

export default function Wishlist() {
  const selector = useSelector((state) => state.ecom.wishList);
  const dispatch = useDispatch()  

  return (
    <div className="border-2">
      <p className="font-bold text-center text-4xl ">
        Wishlist {console.log(Object.values(selector))}
      </p>
      {Object.values(selector).map((val) => {
        return (
          <div
            key={val.id}
            className="h-25 border-2 text-left flex m-2 p-2 justify-between"
          >
            <div className="flex justify-end">
              <img src={val.image} alt="" className="object-contain h-full" />
              <div className="ml-2">
                <p>{val.title}</p>
                <p className="bg-blue-400 w-fit px-1">Price : {val.price}</p>
                <p>Rating : {val.rating.rate}</p>
              </div>
            </div>
            <div className="flex justify-between flex-col">
              <button
                className="bg-red-500 p-2"
                onClick={() => {
                  dispatch(removeWishItem(val.id));
                }}
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
