import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Card,
  CardContent,
  Grid,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {motion} from "framer-motion";

const WEEK_DAYS = [
  "Monday ",
  "Tuesday ",
  "Wednesday ",
  "Thursday ",
  "Friday ",
  "Saturday ",
  "Sunday ",
];

const Forecast = ({data}) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <Box sx={{maxWidth: 800, margin: "auto", mt: 4}}>
      <Typography variant="h5" align="center" gutterBottom>
        Daily Forecast
      </Typography>

      {data.list.slice(0, 7).map((item, idx) => (
        <motion.div
          key={idx}
          initial={{opacity: 0, y: 15}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.3, delay: idx * 0.1}}
          style={{marginBottom: "20px"}}
        >
          <Accordion sx={{mb: 1, backgroundColor: "#e3f2fd"}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Grid
                container
                alignItems="center"
                spacing={1}
                sx={{textAlign: "left"}}
              >
                <Grid item xs={2}>
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    alt="weather"
                    style={{width: 40}}
                  />
                </Grid>

                <Grid item xs={3}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {forecastDays[idx]}
                  </Typography>
                </Grid>

                <Grid item xs={4}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{whiteSpace: "nowrap"}}
                  >
                    {item.weather[0].description}
                  </Typography>
                </Grid>

                <Grid item xs={3}>
                  <Typography variant="body1" fontWeight="500">
                    {Math.round(item.main.temp_max)}°C /{" "}
                    {Math.round(item.main.temp_min)}°C
                  </Typography>
                </Grid>
              </Grid>
            </AccordionSummary>

            <AccordionDetails>
              <Card variant="outlined">
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography variant="body2">
                        Pressure: {item.main.pressure}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2">
                        Humidity: {item.main.humidity}%
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2">
                        Clouds: {item.clouds.all}%
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2">
                        Wind speed: {item.wind.speed} m/s
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2">
                        Sea level: {item.main.sea_level}m
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2">
                        Feels like: {item.main.feels_like}°C
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </AccordionDetails>
          </Accordion>
        </motion.div>
      ))}
    </Box>
  );
};

export default Forecast;
