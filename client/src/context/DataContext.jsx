import {  createContext, useContext, useEffect, useState } from "react";
import stays from '../../src/assets/stays.json'


export const DataContext = createContext()


const DataProvider = (props) => {
    const [data, setData] = useState(stays)
    console.log(stays)

    return (
        <DataContext.Provider value={{data,setData }}>
            {props.children}
        </DataContext.Provider>
    )
}


export default DataProvider;
