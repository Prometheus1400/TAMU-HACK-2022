import React, { useEffect, useState } from "react";
import {
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    Select,
    MenuItem,
} from "@mui/material";

const SPY = 1.15;
const QQQ = 1.247;
const SCHD = 1.1346 + 0.0217;
const years = [1, 2, 5, 10];

const interests = {
    SPY: 1.15,
    QQQ: 1.247,
    SCHD: 1.1346 + 0.0217,
};

function StockBoard({ name, sum, description, color }) {
    const [input, setInput] = useState(0);
    const [output, setOutput] = useState([0, 0, 0, 0]);

    useEffect(() => {
        setInput((sum * 12 * 1.0825).toFixed(2));
    }, [sum]);

    // Regex for checking numbers
    const re = /^[0-9\b]+$/;

    useEffect(() => {
        let ret = [];

        years.map((year, index) => {
            let final_val = 0;

            final_val = input * Math.pow(interests[name], year);

            ret[index] = final_val.toFixed(2);
        });
        setOutput(ret);
    }, [input]);

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
                        Initial Investment Amount
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        value={input}
                        onChange={handleInput}
                        startAdornment={
                            <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Initial Investment Amount"
                    />
                </FormControl>
            </div>

            {years.map((year, index) => (
                <div>
                    {name === "SPY" ? (
                        <div>
                            <h3 className="center">In {year} year(s):</h3>
                        </div>
                    ) : (
                        <h3>&nbsp;</h3>
                    )}
                    <div>
                        <h3 className="center">$ {output[index]}</h3>
                    </div>
                </div>
            ))}
        </>
    );
}

export default StockBoard;
