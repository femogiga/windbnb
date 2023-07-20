import { useEffect, useState } from "react"
import Icon from "./Icon"
import Location from "./Location"
import Guest from "./Guest"
import { Link } from "react-router-dom"




const Header = () => {

    const [classed, setClassed] = useState('')
    const [isLocationExpand, setIsLocationExpand] = useState(false)
    const [isGuestExpand, setIsGuestExpand] = useState(false)
    const [mobile, setMobile] = useState("")




    const handleLocationFocus = () => {
        setClassed('display-block')
        setIsLocationExpand(true)
        setIsGuestExpand(false)
        console.log(isLocationExpand)
    }
    const handleGuestFocus = () => {
        setClassed('display-block')
        setIsGuestExpand(true)
        setIsLocationExpand(false)
        console.log(isLocationExpand)

    }

    const handleCloseButton = (e) => {
        e.preventDefault()
        setClassed('display-none')
    }


    useEffect(() => {
        window.addEventListener('resize', () => {
            setMobile('mobile')
            setClassed('mobile')
        })
    }, [mobile])



    // const handleBlur = () => {
    //     setClassed('display-none')
    // }


    return (



        <div className="header flex ">
            <div className={`search-page ${classed}`}>
                <div>
                    <Location placeholder={'Helsinki'} isLocationExpand={isLocationExpand} />
                </div>
                <div>
                    <Guest isGuestExpand={isGuestExpand} />
                </div>
                <div className='search-button controls'>
                    <button><span className="material-symbols-outlined">search</span>Search</button>
                    <button onClick={handleCloseButton}>X</button>
                </div>
            </div>

            <Icon src={'/assets/triangleLogo.png'}  alt='logo'/>
            <article className={`flex button-border ${mobile}`} >
                <div>
                    <button onClick={handleLocationFocus}>Helsinki,Finland</button>
                </div>
                <div>
                    <button onClick={handleGuestFocus}>Add Guest</button>
                </div>
                <div>
                    <span className="material-symbols-outlined">search</span>
                </div>
            </article>
        </div>
    )
}


export default Header
