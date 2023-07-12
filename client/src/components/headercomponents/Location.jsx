import { DataContext } from "../../context/DataContext"
import LocationCard from "./LocationCard"
import { useContext, useEffect, useState } from "react"



const Location = ({ placeholder, onFocus, onBlur }) => {
    const { data } = useContext(DataContext)
    const newSet = new Set(data.map(item => item.city))

    const newArr = Array.from(newSet)
    const [newData, setNewData] = useState([])
    useEffect(() => {
        setNewData(newArr)
    }, [newArr])



    console.log(newArr)
    return (
        <div className={`location controls flow-2`}>
            <div>
                <p>LOCATION</p>
                <input type='text' placeholder={'Helsinki ,Finland'} onFocus={onFocus} onBlur={onBlur} />
            </div>
            <ul>
                {
                    newData.filter(item => item !== undefined).map((loc, index) => <li key={index}>{<LocationCard city={loc} country={'Finland'} />}</li>)
                }
            </ul>
            <LocationCard />
        </div>
    )
}


export default Location
