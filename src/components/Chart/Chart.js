import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css'
import Card from "../UI/Card";

const Chart = props => {
    const dataPointValues = props.dataPoints.map(item => item.value)
    const  totalMaximum =Math.max(...dataPointValues)
    return <div className="chart">
        {props.dataPoints.map(dataPoint =>
            <ChartBar
                value={dataPoint.value}
                maxValue={totalMaximum}
                label={dataPoint.label} />
            )
        }
    </div>
}
export default Chart
