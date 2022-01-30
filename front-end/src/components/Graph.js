import React, { useEffect, useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";
import Papa from "papaparse";
import "../App.css";

export default function Graph() {
    const [data, setData] = useState([]);
    useEffect(() => {
        Papa.parse("./stocks/stonks.csv", {
            download: true,
            header: true,
            complete: function (input) {
                const records = input.data.reverse();
                setData(records);
            },
        });
    }, []);
    return (
        data && (
            <div>
                <h1 className="gtitle">
                    Historical data of SPY, QQQ, SCHD (since 2017)
                </h1>
                <LineChart
                    width={750}
                    height={400}
                    data={data}
                    margin={{
                        top: 5,
                        right: 40,
                        left: 10,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="SPY"
                        stroke="#8884d8"
                        dot={false}
                        strokeWidth={1.5}
                    />
                    <Line
                        type="monotone"
                        dataKey="QQQ"
                        stroke="#82ca9d"
                        strokeWidth={1.5}
                        dot={false}
                    />
                    <Line
                        type="monotone"
                        dataKey="SCHD"
                        stroke="#ca9b82"
                        dot={false}
                    />
                    <Line
                        type="monotone"
                        dataKey="AAPL"
                        stroke="#930335"
                        dot={false}
                    />
                </LineChart>
            </div>
        )
    );
}
