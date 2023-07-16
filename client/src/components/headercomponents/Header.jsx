import { useEffect, useState } from "react"
import Icon from "./Icon"
import Location from "./Location"
import Guest from "./Guest"




const Header = () => {

    const [classed, setClassed] = useState('')
    const [isLocationExpand, setIsLocationExpand] = useState(false)
    const [isGuestExpand, setIsGuestExpand] = useState(false)




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




    // const handleBlur = () => {
    //     setClassed('display-none')
    // }


    return (



        <div className="flex space-between">
            <div className={` search-page ${classed}`}>
                <div>
                    <Location placeholder={'Helsinki'} isLocationExpand={isLocationExpand} />
                </div>
                <div>
                    <div>
                        {/* <p>Guest</p>
                        <p>Add guest</p> */}
                    </div>
                    <Guest isGuestExpand={isGuestExpand} />
                </div>
            </div>

            <Icon src={'./src/assets/triangleLogo.png'} />
            <article className={'flex'}>
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
