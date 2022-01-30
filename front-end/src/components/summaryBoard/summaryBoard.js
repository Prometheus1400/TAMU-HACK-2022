import React, { useEffect, useState } from "react";
import {
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
} from "@mui/material";

function SummaryBoard({ sum, setSum }) {
    const [networth, setNetworth] = useState("");
    const [saving, setSaving] = useState("");
    const [salary, setSalary] = useState("");
    const [stock, setStock] = useState("");
    const [years, setYears] = useState("");

    // Regex for checking numbers
    const re = /^[0-9\b]+$/;

    useEffect(() => {
        if (networth == 0) {
            setYears(0);
        } else if (networth > 0 && (salary > 0 || stock > 0)) {
            let number_of_years = findYears(networth, saving, salary, stock);
            if (number_of_years > -1) {
                setYears(number_of_years);
            }

            console.log("Number of years till retirement:", number_of_years);
        }
    }, [networth, saving, salary, stock]);

    function findYears(networth, saving, salary, stock) {
        let target = networth - saving;
        for (let n = 0; n < 100; n++) {
            let sum = 0;
            sum = salary * n + stock * Math.pow(1.7, n);
            if (sum >= target) {
                return n;
            }
        }

        return -1;
    }

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
                <FormControl
                    fullWidth
                    sx={{ marginLeft: 0, marginTop: 1, marginBottom: 1 }}
                >
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
                <FormControl
                    fullWidth
                    sx={{ marginLeft: 0, marginTop: 1, marginBottom: 1 }}
                >
                    <InputLabel htmlFor="outlined-adornment-amount">
                        Current Savings
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        value={saving}
                        onChange={handleSaving}
                        startAdornment={
                            <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Current Savings"
                    />
                </FormControl>
            </div>
            <div>
                <FormControl
                    fullWidth
                    sx={{ marginLeft: 0, marginTop: 1, marginBottom: 1 }}
                >
                    <InputLabel htmlFor="outlined-adornment-amount">
                        Salary After Expenses
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        value={salary}
                        onChange={handleSalary}
                        startAdornment={
                            <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Salary After Expenses"
                    />
                </FormControl>
            </div>
            <div>
                <FormControl
                    fullWidth
                    sx={{ marginLeft: 0, marginTop: 1, marginBottom: 1 }}
                >
                    <InputLabel htmlFor="outlined-adornment-amount">
                        Current Stock Investments
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        value={stock}
                        onChange={handleStocks}
                        startAdornment={
                            <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Current Stock Investments"
                    />
                </FormControl>
            </div>
            <div>
                <h2 className="center">Countdown to Financial Freedom:</h2>
                <h2 className="center">{years} years</h2>
            </div>
        </>
    );
}

export default SummaryBoard;
