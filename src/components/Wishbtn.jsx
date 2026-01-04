import { useDispatch } from "react-redux";
import { setWishlist } from "../RTK/createSlice";

export default function Wishbtn({ val, children }) {
  const dispatch = useDispatch();
  return (
    <button
      onClick={(e) => {
        e.stopPropagation()
        dispatch(setWishlist(val));
      }}
      className="bg-indigo-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
    >
      {children}
    </button>
  );
}
