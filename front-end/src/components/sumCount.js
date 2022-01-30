import React from "react";

export default function SumCount({ sum }) {
    return (
        <h1
            style={{
                width: "300px",
            }}
        >
            Annual cost: ${(sum * 12 * 1.0825).toFixed(2)}
        </h1>
    );
}
