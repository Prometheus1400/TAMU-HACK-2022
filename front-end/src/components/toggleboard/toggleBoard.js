import React, { useEffect, useState } from "react";
import { Switch } from "@mui/material";
import "./toggleBoard.css";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { withTheme } from "@emotion/react";

const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#f242f5",
    "#63f542",
    "#42f5d7",
    "#f54263",
];

function ToggleBoard({ sum, setSum }) {
    const [togArray, setToggleArray] = useState([
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
    ]);
    const [pieChart, setPieChart] = useState([]);
    const price = [15.49, 12.99, 14.99, 9.99, 11.99, 12.99, 9.99, 7.99];
    const names = [
        "Netflix",
        "Hulu",
        "HBO Max",
        "Spotify",
        "Youtube Preimum",
        "Amazon Prime",
        "Apple Music",
        "Disney+",
    ];

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            console.log("Test:", active, payload, label);
            return (
                <div className="custom-tooltip">
                    <p className="label">{`${payload[0].name} : ${payload[0].value}`}</p>
                </div>
            );
        }

        return null;
    };

    useEffect(() => {
        let newSum = 0;
        let newPieChart = [];
        togArray.map((item, index) => {
            if (item) {
                newSum += price[index];
                newPieChart = [
                    ...newPieChart,
                    {
                        name: names[index],
                        value: parseFloat(
                            (price[index] * 12 * 1.0825).toFixed(2)
                        ),
                    },
                ];
            }
        });
        console.log(newSum);
        console.log(newPieChart);
        setSum(newSum);
        setPieChart(newPieChart);
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
            <p
                style={{
                    color: "grey",
                    fontSize: "12px",
                    marginTop: "-20px",
                }}
            >
                Prices prorated to annual subscription.
            </p>

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
            {console.log(pieChart)}
            {pieChart.length > 0 && (
                <ResponsiveContainer width="100%" height="40%">
                    <PieChart width={40} height={40}>
                        <Pie
                            data={pieChart}
                            ccx="50%"
                            cy="50%"
                            label
                            labelLine={true}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {pieChart.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                    </PieChart>
                </ResponsiveContainer>
            )}
        </>
    );
}

export default ToggleBoard;
