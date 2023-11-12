import { Box, Grid, Typography } from '@mui/material'
import React, { useState } from "react";

const Legend = () => {
    return (
        <Box sx={{
            display: "flex", justifyContent: "center", flexDirection: "column"
        }}>

            <Box sx={{
                display: "flex", justifyContent: "center", alignItems: "flex-start"
            }}>
                <Box sx={{ mt:2, width: "40px", height: "5px", borderRadius: "3px", background: "#3f46f7", mr:2}}></Box>
                <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                    <Typography variant="h6" sx={{
                        color: "rgba(235, 235, 245, 0.3)",
                        mb: 1
                    }}>
                        Total User Visit
                    </Typography>
                    <Typography variant="h6" sx={{
                        color: "white",
                        mb: 2
                    }}>
                        3,124,213 users
                    </Typography>

                </Box>
            </Box>
            <Box sx={{
                display: "flex", justifyContent: "center", alignItems: "flex-start"
            }}>
                <Box sx={{ mt:2, width: "40px", height: "5px", borderRadius: "3px", background: "#5e5ce6", mr:2}}></Box>
                <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                    <Typography variant="h6" sx={{
                        color: "rgba(235, 235, 245, 0.3)",
                        mb: 1
                    }}>
                        User Sign up
                    </Typography>
                    <Typography variant="h6" sx={{
                        color: "white",
                        mb: 2
                    }}>
                       1,523,151 users
                    </Typography>

                </Box>
            </Box>
            <Box sx={{
                display: "flex", justifyContent: "center", alignItems: "flex-start"
            }}>
                <Box sx={{ mt:2, width: "40px", height: "5px", borderRadius: "3px", background: "#2a165d", mr:2}}></Box>
                <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                    <Typography variant="h6" sx={{
                        color: "rgba(235, 235, 245, 0.3)",
                        mb: 1
                    }}>
                        User Subscribed
                    </Typography>
                    <Typography variant="h6" sx={{
                        color: "white",
                        mb: 2
                    }}>
                       948,213 users
                    </Typography>

                </Box>
            </Box>


        </Box>


    )
}

export default Legend