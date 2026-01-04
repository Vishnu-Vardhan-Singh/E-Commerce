import { createContext, useState } from "react";

export const popContext = createContext(null)

export function  PopFunc({children}){
    const [popDisplay,setPopDisplay] = useState('none')
    return <popContext.Provider value={{popDisplay,setPopDisplay}}>{children}</popContext.Provider>

}