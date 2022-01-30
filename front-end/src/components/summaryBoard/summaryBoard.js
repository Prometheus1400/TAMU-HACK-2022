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
        if (networth === "" || (salary === "" && stock === "")) {
            setYears("");
        } else if (networth > 0 && (salary > 0 || stock > 0)) {
            let number_of_years = findYears(networth, saving, salary, stock);
            if (number_of_years > 0) {
                setYears(number_of_years);
            }

            //console.log("Number of years till retirement:", number_of_years);
        }
    }, [networth, saving, salary, stock]);

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
    function findYears(networth, saving, salary, stock) {
        let target = networth - saving;
        let lo = 0;
        let hi = 1000000;

        while (lo < hi) {
            let mid = Math.floor((hi + lo) / 2);
            sum = salary * mid + stock * Math.pow(1.07, mid);
            if (sum < target) {
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }

        if (salary * lo + stock * Math.pow(1.07, lo) < target) {
            //console.log("n = ", lo);
            return lo + 1;
        }

        //console.log("n = ", lo);
        return lo;
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
            <p
                style={{
                    color: "grey",
                    fontSize: "12px",
                    marginTop: "-20px",
                }}
            >
                Assuming an annualized 7% stock growth rate (all invested in SPY
                and adjusted for inflation), and constant base salary.
            </p>
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
                        Current Networth
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        value={saving}
                        onChange={handleSaving}
                        startAdornment={
                            <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Current Networth"
                    />
                </FormControl>
            </div>
            <div>
                <FormControl
                    fullWidth
                    sx={{ marginLeft: 0, marginTop: 1, marginBottom: 1 }}
                >
                    <InputLabel htmlFor="outlined-adornment-amount">
                        Expected Yearly Savings
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        value={salary}
                        onChange={handleSalary}
                        startAdornment={
                            <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Expected Yearly Savings"
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
            {years !== "" && (
                <div>
                    <h2 className="center">Countdown to Financial Freedom:</h2>
                    <h2 className="center">{years} years</h2>
                </div>
            )}
        </>
    );
}

export default SummaryBoard;
