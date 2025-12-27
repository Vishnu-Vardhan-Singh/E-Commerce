import { useDispatch } from "react-redux";
import { setCart } from "../RTK/createSlice";

export default function Buybtn({ val,children }) {
    // console.log(val)
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(setCart(val));
      }}
      className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
    >{children}</button>
  );
}
