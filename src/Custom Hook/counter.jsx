import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState('Ram Ram');
  return (
        <div className="flex [&>*]:border-2 [&>*]:mx-1 [&>*]:p-1 [&>*]:rounded-2xl" >
        
        <input type="text"  />
        <button>add</button>
        <button>Remove</button>
        <button>Reset</button>
        <div>{count}</div>
        </div>
  );
}
