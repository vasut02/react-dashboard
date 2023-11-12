import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { PiArrowDownLeftBold } from "react-icons/pi"

const Stats = () => {
    return (
        <Box sx={{
            p: 2,
            borderRadius: "16px",
            boxShadow: "2px 2px 4px 0 rgba(15, 10, 15, 0.5), -2px -2px 4px 0 rgba(41, 82, 113, 0.5), inset 0 1px 250px 0 rgba(5, 16, 24, 0.1)",
            backgroundColor: "rgba(9, 24, 35, 0.05)",
            display: "flex",
            justifyContent:"flex-start",
            alignItems:"center",
            mb:4
        }}>
            <Box sx={{ backgroundColor: "#3f46f7", p: "13px", mr: 2, borderRadius: 2 }}>
                <PiArrowDownLeftBold size="30" color='white' />
            </Box>
            <Box sx={{}}> 

                <Typography variant="p" sx={{
                    color: "#8c89b4",
                    fontWeight: "bold",
                    mb: 1,

                }}>
                    Total Visits
                </Typography>
                <Typography variant="h4" sx={{
                    color: "white",
                    fontWeight: "bold"
                }}>
                    6400
                </Typography>
            </Box>
            <Typography variant="p" sx={{
                    color: "#00ca65",
                    fontWeight: "bold",
                    backgroundColor:"rgba(2, 177, 90, 0.15)",
                    p:1,
                    borderRadius:"8px", ml:"auto"
                }}>
                    +12.7%
                </Typography>
        </Box>
    )
}

export default Stats