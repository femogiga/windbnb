import { useState } from "react"
import Icon from "./Icon"
import Location from "./Location"
import Guest from "./Guest"




const Header = () => {

    const [classed, setClassed] = useState('')

    const handleFocus = () => {
        setClassed('display-block')
    }

    const handleBlur = () => {
        setClassed('display-none')
    }


    return (


        <div className="header">
            <article className={`search-page ${classed}`}>
                <Guest />
            </article>
            <Icon src={'./src/assets/triangleLogo.png'} />
            <Location placeholder={'Helsinki'} onFocus={handleFocus} onBlur={handleBlur} />
            <Guest />
        </div>
    )
}


export default Header
