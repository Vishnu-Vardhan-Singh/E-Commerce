import { useEffect, useState } from "react";

export default function Demo(){
    const {store,changeMode}= useTheme('light')
    return <div>
        <p>{store}</p>
        <button onClick={changeMode}>Click me</button>
    </div>
}
    

export function useTheme(mode) {
  const [store, setStore] = useState(()=>{
    return (function () {
       if (localStorage.getItem("theme")) {
          return localStorage.getItem("theme");
        } else {
          console.log("Theme me kuch nhi");
          localStorage.setItem("theme", mode);
          return mode;
        }
    })();
  });



  function changeMode() {
    if (store !== "dark") {
      setStore(() => {
        localStorage.setItem('theme',"dark")
        return "dark"});
      
    } else if (store === "dark") {
      setStore(() => {
        localStorage.setItem('theme',"light")
        return "light"});
    }
  }

  return { store, changeMode };
}
