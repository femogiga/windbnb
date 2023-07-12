


const Location = ({ placeholder, onFocus, onBlur }) => {
    return (
        <div className={`location flow-2`}>
            <div>
                <p>LOCATION</p>
                <input type='text' placeholder={'Helsinki ,Finland'} onFocus={onFocus} onBlur={onBlur} />
            </div>
        </div>
    )
}


export default Location
