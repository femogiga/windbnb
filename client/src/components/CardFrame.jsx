const CardFrame = ({ children }) => {
    return (
        <div className="cardframe flex flex-column row-gap-1 space-between">
            {children}
        </div>
    )
}


export default CardFrame
