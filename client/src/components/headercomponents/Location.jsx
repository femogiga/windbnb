
import { DataContext } from "../../context/DataContext"
import LocationCard from "./LocationCard"
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"



const Location = ({ placeholder, onClick, onBlur ,isLocationExpand}) => {
    const { data } = useContext(DataContext)
    const[loc,setLoc] = useState('Helsinki, Finland')
    const newSet = new Set(data.map(item => item.city))

    const newArr = Array.from(newSet).filter((item) => item !== undefined)
    const [newData, setNewData] = useState([])
    useEffect(() => {
        setNewData(newArr)
    }, [])

    const handleLocClick = (e)=>{
        e.preventDefault()
        setLoc(e.target.innerText)
        console.log(loc)
    }

    console.log(isLocationExpand)
    return (
        <div className={`location controls flow-2`}>
            <div className={'label-parent'}>
                <p>LOCATION</p>
                <label>{loc}</label>
                <button type='text' placeholder={'Helsinki ,Finland'} onClick={onClick} onBlur={onBlur} />
            </div>
            <ul className={``}>
                {
                    isLocationExpand && newData.filter(item => item !== undefined).map((loc, index) => <li key={index}><Link onClick={handleLocClick} className={'link'} value={loc} to={"#"}>{<LocationCard city={loc} country={'Finland'} />}</Link></li>)
                }
            </ul>
            {/* <LocationCard /> */}
        </div>
    )
}


export default Location
