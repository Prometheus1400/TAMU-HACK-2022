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
    const price = [10 * 12, 12 * 12, 14 * 12, 18 * 12, 16 * 12];

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

    const subs = ["Netflix", "Hulu", "HBO Max", "Spotify", "Youtube Premium"];

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
