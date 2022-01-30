import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SumCount from "./components/sumCount";
import ToggleBoard from "./components/toggleboard/toggleBoard";
import SummaryBoard from "./components/summaryBoard/summaryBoard";
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
                            <div className="toggle-board">
                                <ToggleBoard sum={sum} setSum={setSum} />
                                <SumCount sum={sum} />
                            </div>
                        </div>
                    </Grid>

                    <Grid item md={6}>
                        <div className="grid-comp">
                            <h1>Big Boi Graphs goes here</h1>
                        </div>
                    </Grid>

                    <Grid item md={3}>
                        <div className="grid-comp">
                            <div className="summary">
                                <SummaryBoard />
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default App;
