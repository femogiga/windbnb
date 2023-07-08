import Country from "./Country"

const Stay = ({ stay, country }) => {
    return (
        <div className=" stay flex space-between align-center">
            <Country country={country} />
            <p>{stay}</p>
        </div>
    )
}


export default Stay
