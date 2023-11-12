import { Box, Grid } from '@mui/material'
import React from 'react'
import TotalVists from './TotalVists'
import ActiveUsers from './ActiveUsers'
import TotalClicks from './TotalClicks'
import TotalSubscribers from './TotalSubscribers'

const Stats = () => {
    return (
        <Grid container display={"flex"} flexDirection={"column"} justifyContent={"center"} sx={{width:"100%"}}>
            <Grid item>
               <TotalVists/>
            </Grid>
            <Grid item>
               <TotalSubscribers/>
            </Grid>
            <Grid item>
               <ActiveUsers/>
            </Grid>
            <Grid item>
               <TotalClicks/>
            </Grid>
        </Grid>
    )
}

export default Stats