const Rating = ({ rating }) => {
    return (
        <div className="rating flex flex-end">
            <span className="material-symbols-outlined">star</span>
            <p>{rating}</p>
        </div>
    )
}


export default Rating
