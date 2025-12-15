import { useEffect, useState } from "react";

export default function Demo() {
  const { store, changeMode } = useTheme("Dark");
  return (
    <div>
      <p>{store}</p>
      <button onClick={changeMode}>Click me</button>
    </div>
  );
}

export function useTheme(defaultmode = 'Dark') {
  const [store, setStore] = useState(()=>{
    return localStorage.getItem('theme')||defaultmode
  });

  useEffect(()=>{
    localStorage.setItem('theme',store)
  },[store])

  function changeMode() {
        let temp = store === 'Light'?'Dark':'Light'
      setStore(temp);
    }

  return { store, changeMode };
}