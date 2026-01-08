import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQty, increaseQty, removeCartItem } from "../../RTK/cartSlice";

export default function Cart() {
  const selector = useSelector((state) => state.cart);

  console.log();

  const dispatch = useDispatch();

  const [qnty, setQty] = useState([]);
  useEffect(()=>{
    setQty(Object.values(selector))
  },[selector])
  console.log(selector);
  return (
    <div className="border-2">
      <p className="font-bold text-center text-4xl border-2">Cart</p>
      {qnty.map((val) => {
        return (
          <div
            key={val.id}
            className="h-25 border-2 text-left flex m-2 p-2 justify-between max-sm:h-auto"
          >
            <div className="flex justify-end">
              <img src={val.image} alt="" className="object-contain h-full max-sm:h-20 max-sm:w-20" />
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
                      dispatch(decreaseQty(val.id));
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-between flex-col">
              <button className="bg-red-500 p-2" onClick={()=>{
              //   setQty((prev)=>{
              //   return prev.filter((filterVal)=>{
              //           if(filterVal.id === val.id){return false}
              //           return true
                
              // })})
              dispatch(removeCartItem(val.id))
              }}>Remove</button>
              <div>
                {Math.round(val.price * (val.qty || 1) * 100) /100}
                {/* {val.price*val.qty} */}
              </div>
            </div>
          </div>
        );
      })}
      <div className="font-bold text-center text-4xl border-2 max-sm:h-auto sticky bottom-1 left-0 right-0 bg-amber-50">
        Total :{" "}
        {Math.round(
          qnty.reduce((acc, { qty, price }) => {
            return acc + qty * price;
          }, 0) * 100
        ) / 100}
      </div>
    </div>
  );
}
