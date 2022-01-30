import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import SumCount from "./components/sumCount";
import ToggleBoard from "./components/toggleboard/toggleBoard";
import "./App.css";

function App() {
    const [sum, setSum] = useState(0);
    // Declare a new state variable, which we'll call "count"
    return (
        <>
            <h1 className="title">Serious Vizness</h1>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item md={3}>
                        <div className="grid-comp">
                            <ToggleBoard sum={sum} setSum={setSum} />
                            <SumCount sum={sum} />
                        </div>
                    </Grid>

                    <Grid item md={6}>
                        <div className="grid-comp">
                            <ToggleBoard sum={sum} setSum={setSum} />
                            <SumCount sum={sum} />
                        </div>
                    </Grid>

                    <Grid item md={3}>
                        <div className="grid-comp">
                            <ToggleBoard sum={sum} setSum={setSum} />
                            <SumCount sum={sum} />
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default App;
