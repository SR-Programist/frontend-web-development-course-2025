import { createContext, useContext, useState } from "react";


export const context = createContext();

export const ContextProvider=({children})=>{

    const [data, setData] = useState("IMP Data")
    let obj = { data , setData}
    return(
        <context.Provider value={obj}>
            {children}
        </context.Provider>
    )
}

export const AuthContext = ()=> useContext(context);