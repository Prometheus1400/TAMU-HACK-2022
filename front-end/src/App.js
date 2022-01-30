import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SumCount from "./components/sumCount";
import ToggleBoard from "./components/toggleboard/toggleBoard";
import SummaryBoard from "./components/summaryBoard/summaryBoard";
import StockBoard from "./components/stockBoard/stockBoard";
import Graph from "./components/Graph";
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
                            <div className="graph">
                                <Graph />

                                <Box sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={2}>
                                        <Grid item md={4}>
                                            <div className="grid-comp">
                                                <div className="summary">
                                                    <StockBoard
                                                        name="SPY"
                                                        description="Moderate risk & reward"
                                                        color="rgb(136, 132, 216)"
                                                        sum={sum}
                                                    />
                                                </div>
                                            </div>
                                        </Grid>

                                        <Grid item md={4}>
                                            <div className="grid-comp">
                                                <div className="summary">
                                                    <StockBoard
                                                        name="QQQ"
                                                        description="High risk & reward"
                                                        color="rgb(130, 202, 157)"
                                                        sum={sum}
                                                    />
                                                </div>
                                            </div>
                                        </Grid>

                                        <Grid item md={4}>
                                            <div className="grid-comp">
                                                <div className="summary">
                                                    <StockBoard
                                                        name="SCHD"
                                                        description="Low risk & reward"
                                                        color="rgb(202, 155, 130)"
                                                        sum={sum}
                                                    />
                                                </div>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </div>
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
