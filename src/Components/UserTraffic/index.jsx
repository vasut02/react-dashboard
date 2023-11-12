import { Box, FormControl, MenuItem, Select, Tab, Tabs, Typography } from '@mui/material'
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
            background: "rgba(9, 24, 35, 0.05)"
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
        <Box sx={{ ml: { sm: 0, md: 4 }, borderRadius: "10px", boxShadow: "2px 2px 4px 0 rgba(15, 10, 15, 0.5), -2px -2px 4px 0 rgba(41, 82, 113, 0.5), inset 0 1px 250px 0 rgba(5, 16, 24, 0.1)", backgroundColor: "rgba(9, 24, 35, 0.05)", color: "white", p: 2 }}>

            <Box sx={{display:"flex",flexDirection:{xs:"column", sm:"row"}, justifyContent:"space-between", mb:2, alignItems:"flex-start"}}>


                <Typography variant="h5" sx={{
                    color: "white",
                    fontWeight: "bold",
                    ml: 2,
                }}>User Traffic
                </Typography>
                <Box sx={{ minWidth: 120,mt:{xs:2, sm:0}, ml:{xs:2, sm:0},}}>
                    <FormControl sx={{ border: "#8f9bb7", '& fieldset': { borderColor: '#747e9a', borderRadius:'10px' }, }} fullWidth>
                        <Select
                            variant="outlined"
                            sx={{ color: "#8f9bb7", '& .MuiSelect-root': { borderColor: 'red' }, '& .MuiSelect-icon': { color: '#747e9a' } }}
                            value={10}
                        >
                            <MenuItem value={10}>Current Year</MenuItem>
                            <MenuItem value={20}>Current Year</MenuItem>
                            <MenuItem value={30}>Current Year</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

            </Box>

            <Chart
                options={options}
                series={series}
                type="line"
                height="385"
                width="100%"
            />
        </Box>
    )
}

export default App