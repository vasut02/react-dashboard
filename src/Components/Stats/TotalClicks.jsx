import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { AiOutlineStock } from "react-icons/ai"

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
            <Box sx={{ backgroundColor: "#8923d9", p: "13px", mr: 2, borderRadius: 2 }}>
                <AiOutlineStock size="30" color='white' />
            </Box>
            <Box sx={{width:"150px"}}> 

                <Typography variant="p" sx={{
                    color: "#8c89b4",
                    fontWeight: "bold",
                    mb: 1,
                    fontFamily:"Inter"

                }}>
                    Total Clicks
                </Typography>
                <Typography variant="h4" sx={{
                    color: "white",
                    fontWeight: "bold"
                }}>
                    199
                </Typography>
            </Box>
        </Box>
    )
}

export default Stats