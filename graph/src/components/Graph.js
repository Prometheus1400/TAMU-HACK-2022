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
                <LineChart
                    width={800}
                    height={400}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
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
                    />
                    <Line
                        type="monotone"
                        dataKey="QQQ"
                        stroke="#82ca9d"
                        dot={false}
                    />

                    <Line
                        type="monotone"
                        dataKey="SCHD"
                        stroke="#ca9b82"
                        dot={false}
                    />
                </LineChart>
            </div>
        )
    );
}
