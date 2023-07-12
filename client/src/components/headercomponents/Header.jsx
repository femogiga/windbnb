import { useState } from "react"
import Icon from "./Icon"
import Location from "./Location"
import Guest from "./Guest"




const Header = () => {

    const [classed, setClassed] = useState('')

    const handleFocus = () => {
        setClassed('display-block')
    }

    // const handleBlur = () => {
    //     setClassed('display-none')
    // }


    return (


        // <div className="header flex">
        //     <article className={`search-page ${classed}`}>
        //         <Location placeholder={'Helsinki'} onFocus={handleFocus} /*onBlur={handleBlur}*/ />
        //         <input type='text' placeholder={'Add Guest'} onFocus={handleFocus} />
        //         <p>GUEST</p>
        //         <Guest />
        //     </article>
        //     <Icon src={'./src/assets/triangleLogo.png'} />

        //     <Guest />
        // </div>


        <div className="flex space-between">
            <div className={` search-page ${classed}`}>
                <div>
                    <Location placeholder={'Helsinki'} onFocus={handleFocus} />
                </div>
                <div>
                    <Guest />
                </div>
            </div>

            <Icon src={'./src/assets/triangleLogo.png'} />
            <article className={'flex'}>
                <div>
                    <button onClick={handleFocus}>Helsinki,Finland</button>
                </div>
                <div>
                    <button onClick={handleFocus}>Add Guest</button>
                </div>
                <div>
                    <span className="material-symbols-outlined">search</span>
                </div>
            </article>
        </div>
    )
}


export default Header
