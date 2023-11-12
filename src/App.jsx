import { useState } from 'react'
import UserTraffic from './Components/UserTraffic'
import { Box, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import './App.css'
import Stats from './Components/Stats';
import Location from './Components/Location';
import ConversionRate from './Components/ConversionRate';
import WebsiteAnalytics from './Components/WebsiteAnalytics';

function App() {
  const [count, setCount] = useState(0)
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (

    <Box sx={{ background: "linear-gradient(126deg, #060b27 0%, #2f014c 100%)", p: 4, m: 0, minHeight: "100vh" }}>
      <Grid sx={{ mb: 4 }} container justifyContent={'space-between'}>
        <Grid item>
          <Typography variant="h4" sx={{
            background: "-webkit-linear-gradient(#f6f6f7 14%, #7e808f 82%)",
            backgroundClip: "text",
            textFillColor: "transparent",
            fontWeight: "bold"
          }}>
            User Analytics
          </Typography>
          <Typography variant="p" sx={{
            mb: 5, color: "#aebbda"
          }}>
            Lorem ipsum dolor sit consectetur.
          </Typography>
        </Grid>
        <Grid item>
          <Box sx={{ minWidth: 120, }}>
            <FormControl sx={{ border: "#8f9bb7" }} fullWidth>
              <Select
                sx={{ color: "#8f9bb7" }}
                value={10}
              >
                <MenuItem value={10}>User</MenuItem>
                <MenuItem value={20}>User</MenuItem>
                <MenuItem value={30}>User</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>

      </Grid>

      <Grid container columnSpacing={4} flexWrap={"wrap"} sx={{width:"100%"}}>
        <Grid item xs={12} md={4} lg={3}>
          <Stats />
        </Grid>
        <Grid item xs={12} md={8} lg={9}>
          <UserTraffic />
        </Grid>
      </Grid>

      <Grid container sx={{width:"100%"}}>
      <Grid item xs={12} lg={4}><Location/></Grid>
      <Grid item xs={12} lg={4}><ConversionRate/></Grid>
      <Grid item xs={12} lg={4}><WebsiteAnalytics/></Grid>

      </Grid>

    </Box>

  )
}

export default App
