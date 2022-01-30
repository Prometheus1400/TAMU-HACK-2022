import React, { useEffect, useState } from "react";
import {
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
} from "@mui/material";
import { func } from "prop-types";

function SummaryBoard({ sum, setSum }) {
    const [networth, setNetworth] = useState("");
    const [saving, setSaving] = useState("");
    const [salary, setSalary] = useState("");
    const [stock, setStock] = useState("");
    const [years, setYears] = useState("");

    // Regex for checking numbers
    const re = /^[0-9\b]+$/;

    useEffect(() => {
        setYears(salary + stock);
    }, [salary, stock]);

    function handleTarget(event) {
        if (event.target.value === "" || re.test(event.target.value)) {
            setNetworth(event.target.value);
        }
    }

    function handleSaving(event) {
        if (event.target.value === "" || re.test(event.target.value)) {
            setSaving(event.target.value);
        }
    }

    function handleSalary(event) {
        // console.log("salary:", event.target.value);
        if (event.target.value === "" || re.test(event.target.value)) {
            setSalary(event.target.value);
        }
    }

    function handleStocks(event) {
        // console.log("Stocks:", event.target.value);
        if (event.target.value === "" || re.test(event.target.value)) {
            setStock(event.target.value);
        }
    }

    return (
        <>
            <h1 className="center">Want to retire?</h1>
            <div>
                <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">
                        Target Networth
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        value={networth}
                        onChange={handleTarget}
                        startAdornment={
                            <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Target Networth"
                    />
                </FormControl>
            </div>

            <div>
                <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">
                        Current Saving
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        value={saving}
                        onChange={handleSaving}
                        startAdornment={
                            <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Current Saving"
                    />
                </FormControl>
            </div>

            <div>
                <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">
                        Base Salary
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        value={salary}
                        onChange={handleSalary}
                        startAdornment={
                            <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Base Salary"
                    />
                </FormControl>
            </div>

            <div>
                <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">
                        4-year Stocks Package
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        value={stock}
                        onChange={handleStocks}
                        startAdornment={
                            <InputAdornment position="start">$</InputAdornment>
                        }
                        label="4-year Stocks Package"
                    />
                </FormControl>
            </div>

            <div>
                <h2 className="center">Countdown to Financial Freedom:</h2>
                <h2 className="center">{years}</h2>
            </div>
        </>
    );
}

export default SummaryBoard;
