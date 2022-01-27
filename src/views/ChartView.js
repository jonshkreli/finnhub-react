import React from 'react';
import {useSelector} from 'react-redux';
import {CartesianGrid, Line, LineChart, XAxis, YAxis} from 'recharts';
import {timeFormat} from "../utils/formatters";
import {xAxisLabelString} from "../utils/parsers";

const ChartView = ({symbolKey}) => {
    const chartData = useSelector(state => state.chartReducer);

    let xAxisLabel = "...";
    const seriesData = chartData[symbolKey]?.data || []
    if(seriesData.length > 0) {
        xAxisLabel = xAxisLabelString(seriesData);
    }
    return (
        <section className="chart-view">
            <h3 className="chart-title">{symbolKey}</h3>
            <div className="chart-container">
                <LineChart width={500} height={300} margin={{ top: 15, right: 15, bottom: 15, left: 15 }} data={seriesData}>
                    <XAxis dataKey="t" tickCount={0} scale={"auto"} type={"number"} domain={['dataMin', 'dataMax']}
                           tickFormatter={(n,i) => timeFormat(n)}
                           label={{value: xAxisLabel, offset:-10, position:"insideBottom"}}
                    />
                    <YAxis domain={['dataMin', 'dataMax']} unit={"$"}/>
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                    <Line type="monotone" dataKey="p" stroke="#CC84d8" strokeWidth={2}/>
                </LineChart>
            </div>
        </section>
    );
}

export default ChartView;
