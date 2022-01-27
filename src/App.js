import React, {useEffect, useState} from 'react';
import ChartView from "./views/ChartView";
import {useDispatch} from "react-redux";
import {getStocks} from "./api/StockFetcher";
import {date_and_time_formatter} from "./utils/formatters";

const App = () => {
    const dispatch = useDispatch();

    //future usage add and remove what we want to fetch
    const [indicesToFetch, setIndicesToFetch] = useState(["AAPL", "BINANCE:BTCUSDT"])
    const [timeFrame, setTimeFrame] = useState([new Date(), Infinity])
    const [period, setPeriod] = useState(1000)


    useEffect(() => {
        getStocks(dispatch, {indicesToFetch, timeFrame, period})
    }, [])

    return (
        <div className="App">
            <main className="container">
                {indicesToFetch.map((symbolKey, i) => {
                       return <ChartView {...{symbolKey, key: i}}/>
                })}
            </main>
            <div className={"parameters-container container"}>
                <h3>Parameters</h3>
                <div className={"parameter-container"}>
                    <span>Time range:</span>
                    <span className={"from"}>{date_and_time_formatter(timeFrame[0])}</span>
                    <span> - </span>
                    <span className={"to"}>{timeFrame[1]}</span>
                </div>
                <div className={"parameter-container"}>
                    <span>Period: <b>{period}</b> milliseconds</span>
                </div>
            </div>
        </div>
    );
};

export default App;
