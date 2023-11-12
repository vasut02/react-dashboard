import { Box, Grid, Typography } from '@mui/material'
import React, { useState } from "react";
import Chart from "react-apexcharts";
import Legend from './Legend';

const App = () => {

    const [options, setOptions] = useState({
        chart: {
            id: "basic-bar-donut"
        },
        labels: ['Total User Visit', 'User Sign up', 'User Subscribed'],
        chart: {
            toolbar: { show: false },
            zoom: { enabled: false },
            foreColor: '#a9a9a9',
            background: "rgba(9, 24, 35, 0.05)",
        },
        fill: {
            colors: ['#3f46f7', '#5e5ce6', '#2a165d']
          },
        stroke: {
            width: 3,
            lineCap: 'round',
            curve: "smooth"
        },
        plotOptions: {
            pie: {
                startAngle: -120,
                donut: {
                    size: '65%',
                    labels: {
                        show: true,
                        total: {
                            show: true,
                        }
                    }
                }
            }
        },
        // Legend
        legend: {
            show: false,
        },
    })
    const [series, setSeries] = useState([70, 20, 10])

    return (
        <Box sx={{ mt:4,  mr:{md:4, sm:0}, borderRadius: "10px",height:{md:"100%", lg:"80%"}, boxShadow: "2px 2px 4px 0 rgba(15, 10, 15, 0.5), -2px -2px 4px 0 rgba(41, 82, 113, 0.5), inset 0 1px 250px 0 rgba(5, 16, 24, 0.1)", backgroundColor: "rgba(9, 24, 35, 0.05)", color: "white", p: 2 }}>

            <Typography variant="h5" sx={{
                color: "white",
                fontWeight: "bold",
                ml: 2,
                mb: 5
            }}>
                Conversion Rate
            </Typography>


            <Box sx={{ display: "flex", margin:'auto', flexWrap:"wrap", justifyContent:"center", alignItems:"center" }}>
                <Chart
                    options={options}
                    series={series}
                    type="donut"
                    height="300"
                        width="100%"
                />
                <Legend/>
            </Box>
        </Box>
    )
}

export default App