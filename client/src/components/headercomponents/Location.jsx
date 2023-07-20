
import { DataContext } from "../../context/DataContext"
import LocationCard from "./LocationCard"
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"



const Location = ({ placeholder, onClick, onBlur ,isLocationExpand}) => {
    const { data } = useContext(DataContext)
    const newSet = new Set(data.map(item => item.city))

    const newArr = Array.from(newSet).filter((item) => item !== undefined)
    const [newData, setNewData] = useState([])
    useEffect(() => {
        setNewData(newArr)
    }, [])



    console.log(isLocationExpand)
    return (
        <div className={`location controls flow-2`}>
            <div className={'label-parent'}>
                <p>LOCATION</p>
                <button type='text' placeholder={'Helsinki ,Finland'} onClick={onClick} onBlur={onBlur} />
            </div>
            <ul className={``}>
                {
                    isLocationExpand && newData.filter(item => item !== undefined).map((loc, index) => <li key={index}><Link className={'link'} key={index} to={"#"}>{<LocationCard city={loc} country={'Finland'} />}</Link></li>)
                }
            </ul>
            {/* <LocationCard /> */}
        </div>
    )
}


export default Location
