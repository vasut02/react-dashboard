import { Box, Typography } from '@mui/material'
import React, { useState } from "react";
import Chart from "react-apexcharts";

const App = () => {

    const [options, setOptions] = useState({
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]
        },
        yaxis: {
            min: 0,
            max: 3,
            tickAmount: 3,
            labels: {
                formatter: function (value) {
                    return "$" + value + "k";
                }
            },
        },
        chart: {
            toolbar: { show: false },
            zoom: { enabled: false },
            foreColor: '#a9a9a9',
            background: "rgba(9, 24, 35, 0.05)",
            stacked: true,
            
        },
        plotOptions: {
            bar: {
                borderRadius: 5,
                columnWidth: '28%',
            },
        },
        grid:{
            show:true,
            strokeDashArray: 4,
            color:"#47416c",
            xaxis: {
                lines: {
                    show: true,
                }
            },   
            yaxis: {
                lines: {
                    show: false
                }
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
            name: "Country",
            type: 'column',
            color: "#00f2de",
            data: [0.3, 0.4, 0.45, 0.6, 0.5, 0.4, 0.3],
        },
        {
            name: "City",
            type: 'column',
            color: "#fb4540",
            data: [1.3, 1.4, 1.45, 1.6, 1.5, 1.4, 1.3]
        },
    ])

    return (
        <Box sx={{mt:4, mr:{md:4, sm:0}, borderRadius:"10px", boxShadow: "2px 2px 4px 0 rgba(15, 10, 15, 0.5), -2px -2px 4px 0 rgba(41, 82, 113, 0.5), inset 0 1px 250px 0 rgba(5, 16, 24, 0.1)", backgroundColor:"rgba(9, 24, 35, 0.05)", color:"white", p:2 }}>

             <Typography variant="h5" sx={{
                    color: "white",
                    fontWeight: "bold",
                    ml:2
                }}>
                    Location
                </Typography>
            <Chart
                        options={options}
                        series={series}
                        type="line"
                        height="400"
                        width="100%"
                    />
        </Box>
    )
}

export default App