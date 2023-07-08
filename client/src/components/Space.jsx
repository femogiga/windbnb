const Space = ({ space, numBed }) => {
    return (
        <div className="space">
            <p><span>{space}.</span><span> {numBed}</span></p>
        </div>
    )
}

export default Space;
