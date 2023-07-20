


const Icon = ({ src, visibility }) => {
    return (
        <div className={`icon ${visibility}`}>
            <img src={src} /><span className="company-name"> windbnb</span>
        </div>
    )
}


export default Icon
