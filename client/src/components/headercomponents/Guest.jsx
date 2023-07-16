import { useEffect, useRef, useState } from "react";
import Increment from "./Increment";

const Guest = ({ onFocus, onBlur, isGuestExpand }) => {
    const [adult, setAdult] = useState(0);
    const [child, setChild] = useState(0);

    // const adultRef = useRef(null);
    // const childRef = useRef(null);

    const handleAdultChange = (value) => {
        setAdult(value);
    };

    const handleChildChange = (value) => {
        setChild(value);
    };

    return (
        <div className="guest controls">
            <div className="label-parent flow-2">
                <p>Guest</p>
                <label type="text">{isGuestExpand ? adult + child : 'add'} guests</label>
                {/* the above checks in the label changes the value from number to text */}
            </div>
            {
                isGuestExpand &&
                <Increment
                    onChange={handleAdultChange}
                    heading="Adult"
                    ages="Ages 13 or Above"
                />
            }
            {
                isGuestExpand &&
                <Increment
                    onChange={handleChildChange}
                    heading="Children"
                    ages="Ages 2 - 12"
                />

            }
        </div>
    );
};

export default Guest;
