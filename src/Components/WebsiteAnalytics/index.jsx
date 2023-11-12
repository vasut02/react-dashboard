import { Box, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import Chart from "react-apexcharts";

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const App = () => {

    const [options, setOptions] = useState({
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"]
        },
        yaxis: {
            show: false,
        },
        chart: {
            toolbar: { show: false },
            zoom: { enabled: true },
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
        grid: {
            show: true,
            strokeDashArray: 4,
            color: "#47416c",
            xaxis: {
                lines: {
                    show: false,
                }
            },
            yaxis: {
                lines: {
                    show: true
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
            position: 'bottom',
            horizontalAlign: 'left',
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
            name: "Visits",
            type: 'line',
            color: "#3f46f7",
            data: [0.3, 0.4, 0.45, 0.6, 0.5, 0.4, 0.3],
        },
        {
            name: "Sessions",
            type: 'line',
            color: "#8ef27e",
            data: [1.3, 1.4, 1.45, 1.6, 1.5, 1.4, 1.3]
        },
    ])

    return (
        <Box sx={{ mt:4,  mr:{ sm:0}, borderRadius: "10px", boxShadow: "2px 2px 4px 0 rgba(15, 10, 15, 0.5), -2px -2px 4px 0 rgba(41, 82, 113, 0.5), inset 0 1px 250px 0 rgba(5, 16, 24, 0.1)", backgroundColor: "rgba(9, 24, 35, 0.05)", color: "white", p: 2 }}>

            <Typography variant="h5" sx={{
                color: "white",
                fontWeight: "bold",
                ml: 2,
            }}>
                Website Analytics
            </Typography>
            <Typography variant="p" sx={{
                color: "#aebbda",
                fontWeight: "bold",
                ml: 2,
                fontFamily: "Inter",
                mb: 5
            }}>
                Based on your performance
            </Typography>

            <Box width={"min-content"} sx={{display:"flex", mt:2, ml:2, borderRadius:"10px", backgroundColor:"#290c51", cursor:"pointer"}}>
                <Box sx={{py:1}}> <Typography variant="p" sx={{color: "#818181", px:2}}>Weekly</Typography></Box>
                <Box sx={{py:1, borderRadius:"10px",  px:2, backgroundColor:"#250442"}}> <Typography variant="p" sx={{color: "white"}}>Monthly</Typography></Box>
                <Box sx={{py:1}}> <Typography variant="p" sx={{color: "#818181", px:2}}>Yearly</Typography></Box>
            </Box>

            <Chart
                options={options}
                series={series}
                type="line"
                height="300"
                        width="100%"
            />
        </Box>
    )
}

export default App