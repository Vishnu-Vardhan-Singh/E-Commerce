import { useState } from "react";
import { useSelector } from "react-redux"

export default function Cart(){

    const selector = useSelector((state)=>state.ecom.cart)

    const [qty,setQty] = useState({})
    console.log(selector);
    return<div className='border-2'>
        <p className='font-bold text-center text-4xl '>Cart</p>
        {Object.values(selector).map((val)=>{
            return (<div key={val.id} className='h-25 border-2 text-left flex m-2 p-2 justify-between' >
                <div className='flex justify-end'>
                <img src={val.image} alt=""  className='object-contain h-full'/>
                <div className='ml-2'>
                    <p>{val.title}</p>
                    <p className='bg-blue-400 w-fit px-1'>Price : {val.price}</p>
                    <div className='flex my-1 gap-1 items-center' > 
                    Qty : <button className='bg-orange-500 text-center rounded-2xl p-1 ' onClick={()=>{setQty((prev)=>({...prev,[val.id]:((prev[val.id]||1)+1)}))}}>+</button>
                    <p>{qty[val.id]||1}</p>
                    <button className='bg-orange-500 p-1 rounded-2xl ' onClick={()=>{setQty((prev)=>({...prev,[val.id]:((prev[val.id]||1)-1)}))}}>-</button>
                    </div>
                </div>
                </div>
                <div>{Math.round(val.price*(qty[val.id]||1)*10)/10}</div>
            </div>)
        })}
    </div>
} 