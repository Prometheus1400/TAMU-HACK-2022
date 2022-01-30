import React, { useEffect, useState } from "react";
import {
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
} from "@mui/material";

function StockBoard({ name, sum, description, color }) {
    const [input, setInput] = useState(0);
    const [output, setOutput] = useState(0);
    const SPY = 1.15;
    const QQQ = 1.247;
    const SCHD = 1.1346;

    useEffect(() => {
        setInput((sum * 12 * 1.0825).toFixed(2));
    }, [sum]);

    // function getDetails() {
    //     switch (name) {
    //         case "SPY":
    //             setColor("rgb(136, 132, 216)");
    //             setDescription("Moderate risk & reward");
    //             break;
    //         case "QQQ":
    //             setColor("rgb(130, 202, 157)");
    //             setDescription("High risk & reward");
    //             break;
    //         case "SCHD":
    //             setColor("rgb(202, 155, 130)");
    //             setDescription("Low risk & reward");
    //             break;
    //         default:
    //             break;
    //     }
    // }
    // Regex for checking numbers
    const re = /^[0-9\b]+$/;

    // useEffect(() => {
    //     if (networth == 0) {
    //         setYears(0);
    //     } else if (networth > 0 && (salary > 0 || stock > 0)) {
    //         let number_of_years = findYears(networth, saving, salary, stock);
    //         if (number_of_years > -1) {
    //             setYears(number_of_years);
    //         }

    //         console.log("Number of years till retirement:", number_of_years);
    //     }
    // }, [networth, saving, salary, stock]);

    useEffect(() => {
        let answer = 0;
        switch (name) {
            case "SPY":
                answer = input * SPY;
                break;
            case "QQQ":
                answer = input * QQQ;
                break;
            case "SCHD":
                answer = input * SCHD;
                break;
            default:
                break;
        }
        setOutput(answer.toFixed(2));
    }, [input]);

    // function findYears(networth, saving, salary, stock) {
    //     let target = networth - saving;
    //     for (let n = 0; n < 100; n++) {
    //         let sum = 0;
    //         sum = salary * n + stock * Math.pow(1.07, n);
    //         if (sum >= target) {
    //             return n;
    //         }
    //     }

    //     return -1;
    // }

    function handleInput(event) {
        if (event.target.value === "" || re.test(event.target.value)) {
            setInput(event.target.value);
        }
    }

    return (
        <>
            <h1 className="center" style={{ color: color }}>
                {name}
            </h1>
            <h4 className="sub">{description}</h4>

            <div>
                <FormControl
                    fullWidth
                    sx={{
                        marginLeft: 0,
                        marginTop: 1,
                        marginBottom: 1,
                        color: color,
                    }}
                >
                    <InputLabel htmlFor="outlined-adornment-amount">
                        Investment Amount
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        value={input}
                        onChange={handleInput}
                        startAdornment={
                            <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Investment Amount"
                    />
                </FormControl>
            </div>
            <div>
                <h2 className="center">Profit:</h2>
                <h2 className="center">$ {output}</h2>
            </div>
        </>
    );
}

export default StockBoard;
