import { useEffect, useRef, useState } from "react";
import Increment from "./Increment";

const Guest = () => {
    const [adult, setAdult] = useState(0);
    const [child, setChild] = useState(0);

    const adultRef = useRef(null);
    const childRef = useRef(null);

    const handleAdultChange = (value) => {
        setAdult(value);
    };

    const handleChildChange = (value) => {
        setChild(value);
    };

    return (
        <div className="guest">
            <div className="label-parent flow-2">
                <p>GUEST</p>
                <label type="text">{adult + child} guests</label>
            </div>
            <Increment
                onChange={handleAdultChange}
                heading="Adult"
                ages="Ages 13 or Above"
            />
            <Increment
                onChange={handleChildChange}
                heading="Children"
                ages="Ages 2 - 12"
            />
        </div>
    );
};

export default Guest;
