import React, { useEffect, useState } from "react";
import { Switch } from "@mui/material";
import "./toggleBoard.css";

function ToggleBoard({ sum, setSum }) {
    const [togArray, setToggleArray] = useState([
        false,
        false,
        false,
        false,
        false,
    ]);
    const price = [15.49, 12.99, 14.99, 9.99, 11.99, 12.99, 9.99, 7.99];

    useEffect(() => {
        let newSum = 0;
        togArray.map((item, index) => {
            if (item) {
                newSum += price[index];
            }
        });
        console.log(newSum);
        setSum(newSum);
    }, [togArray]);

    const subs = [
        "Netflix",
        "Hulu",
        "HBO Max",
        "Spotify",
        "Youtube Premium",
        "Amazon Prime",
        "Apple Music",
        "Disney+",
    ];

    function handleChange(event) {
        //console.log("Before:", togArray);
        let updatedToggles = [...togArray];
        updatedToggles[event.target.value] =
            !updatedToggles[event.target.value];
        //console.log("After:", updatedToggles);
        setToggleArray(updatedToggles);
    }

    return (
        <>
            <h1>Subscriptions</h1>
            {subs.map((sub, index) => {
                return (
                    <>
                        <div>
                            <span className="label"> {sub}</span>
                            <Switch value={index} onChange={handleChange} />
                        </div>
                    </>
                );
            })}
        </>
    );
}

export default ToggleBoard;
