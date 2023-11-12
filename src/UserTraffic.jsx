import React, { useState } from "react";
import Chart from "react-apexcharts";

const App = () => {

    const [options, setOptions] = useState({
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        },
        yaxis: {
            min: -100,
            max: 200,
            tickAmount: 5,
            labels: {
                formatter: function (value) {
                    return value + "%";
                }
            },
        },
        chart: {
            toolbar: { show: false },
            zoom: { enabled: false },
            foreColor: 'white',
            background: "#060b27"
        },
        plotOptions: {
            bar: {
                borderRadius: 5,
                columnWidth: '100%',
            },
        },

        // Stroke
        stroke: {
            width: 3,
            lineCap: 'round',
            dashArray: [0, 0, 8]
        },
        // Legend
        legend: {
            show: true,
            fontSize: 13,
            position: 'top',
            horizontalAlign: 'right',
            markers: {
                radius: 12,
            },
            fontWeight: 500,
            itemMargin: {
                horizontal: 8,
            },
        },
    })
    const [series, setSeries] = useState([
        {
            name: "User Sign up",
            type: 'column',
            color: "#0082cc",
            data: ["0", "0", 120, "0", 110, 80, "0", 165, 90, 60, 0, 100],
        },
        {
            name: "User Subscribed",
            type: 'column',
            color: "#fb4540",
            data: [-50, -10, 0, -20, 0, 0, -80, 0, 0, 0, -90, 0]
        },
        {
            name: "",
            type: 'line',
            color: "#00f2de",
            data: [-50, -10, 120, -20, 110, 80, -80, 165, 90, 60, -90, 100],
            stroke: {
                curve: 'stepline',
            }
        }

    ])

    return (
        <div className="app">
            <div className="row">
                <div className="mixed-chart">
                    <Chart
                        options={options}
                        series={series}
                        type="line"
                        width="600"
                    />
                </div>
            </div>
        </div>
    );
}

export default App;