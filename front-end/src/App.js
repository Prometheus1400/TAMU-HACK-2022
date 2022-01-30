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

                                <Box sx={{ flexGrow: 1 }}>
                                    <div
                                        style={{
                                            color: "grey",
                                            fontSize: "17px",
                                            margin: "15px",
                                        }}
                                    >
                                        <p>
                                            You probably wonder why SPY, QQQ,
                                            and SCHD instead of other tickers?
                                        </p>

                                        <p>
                                            SPY, QQQ, and SCHD are
                                            exchange-traded funds (or ETF),
                                            <a
                                                style={{
                                                    color: "grey",
                                                    marginLeft: "5px",
                                                }}
                                                href="https://www.investopedia.com/terms/e/etf.asp"
                                            >
                                                a type of security that tracks
                                                an index, sector, commodity, or
                                                other assets but can be
                                                purchased or sold on a stock
                                                exchange same way a regular
                                                stock can.
                                            </a>
                                        </p>

                                        <p>
                                            Because ETFs are a type of fund that
                                            hold multiple underlying assets,
                                            they are a popular choice for
                                            diversification and long-term
                                            investment. They can minimize the
                                            volatility of individual stocks and
                                            still make a profit simultaneously.
                                        </p>

                                        <p>
                                            Because SPY tracks the{" "}
                                            <a
                                                style={{ color: "grey" }}
                                                href="https://www.investopedia.com/terms/s/sp500.asp"
                                            >
                                                S&P 500 Index
                                            </a>
                                            , a market-capitalization-weighted
                                            index of 500 leading publicly traded
                                            companies in the U.S, it can be one
                                            of the main benchmarks of the U.S.
                                            equity market and indicates the
                                            financial health and stability of
                                            the economy. In contrast, QQQ tracks
                                            the{" "}
                                            <a
                                                style={{ color: "grey" }}
                                                href="https://www.google.com/search?client=safari&rls=en&q=nasdaq+100+investopedia&ie=UTF-8&oe=UTF-8"
                                            >
                                                Nasdaq 100
                                            </a>
                                            , a tech-heavy index dominated by
                                            big tech giants like Apple,
                                            Microsoft, Google, etc., which can
                                            provide long-term growth, but its
                                            price can fluctuate in the short
                                            term (high volatility). On the other
                                            hand, SCHD, a darling for dividend
                                            investors, is{" "}
                                            <a
                                                style={{
                                                    color: "grey",
                                                    marginRight: "5px",
                                                }}
                                                href="https://www.investopedia.com/terms/d/dividend-etf.asp"
                                            >
                                                a dividend ETF
                                            </a>
                                            designed to invest in a basket of
                                            dividend-paying stocks. Moreover,
                                            because these ETFs passively follow
                                            the indexes or get rebalancing after
                                            a specific period, they can be
                                            significant financial instruments to
                                            hedge against an unstable market.
                                        </p>

                                        <p>
                                            For example, in 2021, from February
                                            4 to March 9, Apple decreased 11%
                                            from its all-time high while SPY and
                                            QQQ only reduced by 1.23% and 6.38%
                                            from their all-time high. On the
                                            other hand, SCHD increased 5%.
                                            Furthermore, while Apple increased
                                            460% from its value in 2017, SPY,
                                            QQQ, and SCHD also increased
                                            respectively by 94%, 180%, and 80%.
                                        </p>
                                        <p>
                                            These ETFs are correlated to three
                                            types of investing:
                                            <ul>
                                                <li>Income investing</li>
                                                <li>
                                                    Indexing investing with
                                                    value and growth stock
                                                </li>
                                                <li>
                                                    Indexing investing with
                                                    mostly growth stocks
                                                </li>
                                            </ul>
                                        </p>

                                        <p>
                                            Here we have a graph displaying
                                            historical data for these tickers.
                                            We can classify these three ETFs
                                            into moderate risk & reward, high
                                            risk & reward, and low risk &
                                            reward. This graph highlights{" "}
                                            <a
                                                style={{
                                                    color: "grey",
                                                }}
                                                href="https://am.jpmorgan.com/us/en/asset-management/adv/insights/market-insights/principles-for-investing/"
                                            >
                                                a few principles of successful
                                                long-term investing
                                            </a>
                                            :
                                        </p>

                                        <ul>
                                            <li>
                                                Avoid emotional biases by
                                                sticking to a plan
                                            </li>
                                            <li>
                                                Volatility is normal; don't let
                                                it derail you
                                            </li>
                                            <li>Diversification works</li>
                                            <li>
                                                Harness the power of dividends
                                                and compounding
                                            </li>
                                        </ul>

                                        <p>
                                            We also try out scenarios where we
                                            put some of our subscription
                                            expenses in SPY, QQQ, SCHD for 1, 2,
                                            5, and 10 years.
                                        </p>
                                    </div>
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
