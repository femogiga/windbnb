

const LocationCard = ({ city, country }) => {
    return (
        <div className="location-card flow-2">
            <span className="material-symbols-outlined">location_on</span> <span>{`${city} , ${country}`}</span>
        </div>
    )
}


export default LocationCard
