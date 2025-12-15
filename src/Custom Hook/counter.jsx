import { useState } from "react";

export default function Counter() {
  const {value,input,add,subtract,reset} = useCount();
  return (
        <div className="flex [&>*]:border-2 [&>*]:mx-1 [&>*]:p-1 [&>*]:rounded-2xl [&>*]:hover:cursor-pointer" >
        
        <input className='!rounded-[0px] !cursor-default'  type="text" placeholder='Enter value' onChange={input} />
        <button onClick={add}>Addition</button>
        <button onClick={subtract}>Subtraction</button>
        <button onClick={reset}>Reset</button>
        <div className='!rounded-[0px] !cursor-default'>{value}</div>
        </div>
  );
}


function useCount(){
        const [value,setValue]=useState(0)
        const [value1,setValue1] = useState(1)
        function input(e){
            setValue1(()=> Number(e.target.value))
        }
        function add(arg){
              return function(){
                    setValue((val)=>val+arg)
              }
        }
        function subtract(arg){
              return function(){
                    setValue((val)=>val-arg)
              }
        }
        function reset(){
              setValue(()=>0)
        }
        return {
            value,
            input,
            add:add(value1),
            subtract:subtract(value1),
            reset:reset
        }
}



