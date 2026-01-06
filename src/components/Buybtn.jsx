import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../RTK/cartSlice";

export default function Buybtn({ val,children }) {
  const selector = useSelector(state=>state.cart)
  const dispatch = useDispatch();
  return (
    <button
      onClick={(e) => {
        e.stopPropagation()
        dispatch(updateCart(val));
      }}
      className=" bg-indigo-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
    >{(selector[val.id]?.toggleBtn)?selector[val.id].toggleBtn:children}</button>
  );
}
