import { useDispatch } from "react-redux";
import { setCart } from "../RTK/createSlice";
import { updateCart } from "../RTK/cartSlice";

export default function Buybtn({ val,children }) {
  
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(updateCart(val));
      }}
      className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
    >{children}</button>
  );
}
