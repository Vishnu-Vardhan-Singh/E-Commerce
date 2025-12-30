import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQty, increaseQty } from "../../RTK/cartSlice";

export default function Cart() {
  const selector = useSelector((state) => state.cart);

  console.log()

  const dispatch = useDispatch();

  const [qty, setQty] = useState({});
  console.log(selector);
  return (
    <div className="border-2">
      <p className="font-bold text-center text-4xl border-2">Cart</p>
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
                <div className="flex my-1 gap-1 items-center">
                  Qty :{" "}
                  <button
                    className="bg-orange-500 text-center rounded-2xl p-1 "
                    onClick={() => {
                      dispatch(increaseQty(val.id));
                    }}
                  >
                    +
                  </button>
                  <p>{val.qty}</p>
                  <button
                    className="bg-orange-500 p-1 rounded-2xl "
                    onClick={() => {
                        dispatch(decreaseQty(val.id))
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
            <div>{Math.round(val.price * (selector[val.id].qty || 1) * 100) / 100}</div>
          </div>
        );
      })}
      <div className="font-bold text-center text-4xl border-2">Total : {Math.round(Object.values(selector).reduce((acc,{qty,price})=>{return acc+(qty*price)},0)*100)/100}</div>
    </div>
  );
}
