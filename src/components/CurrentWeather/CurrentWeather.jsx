import React from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Divider,
  Box,
} from '@mui/material';

const CurrentWeather = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card
        sx={{
          maxWidth: 500,
          margin: 'auto',
          mt: 4,
          borderRadius: 3,
          backgroundColor: '#e3f2fd',
          boxShadow: 4,
        }}
      >
        <CardContent>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h5" fontWeight="bold">
                {data.city}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {data.weather[0].description}
              </Typography>
            </Grid>
            <Grid item>
              <motion.img
                key={data.weather[0].icon}
                src={`icons/${data.weather[0].icon}.png`}
                alt="weather"
                style={{ width: 80 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </Grid>
          </Grid>

          <Divider sx={{ my: 2 }} />

          <Typography variant="h2" textAlign="center" color="primary">
            {Math.round(data.main.temp)}°C
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box>
                <Typography variant="subtitle2">Feels Like</Typography>
                <Typography>{Math.round(data.main.feels_like)}°C</Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box>
                <Typography variant="subtitle2">Wind</Typography>
                <Typography>{data.wind.speed} m/s</Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box>
                <Typography variant="subtitle2">Humidity</Typography>
                <Typography>{data.main.humidity}%</Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box>
                <Typography variant="subtitle2">Pressure</Typography>
                <Typography>{data.main.pressure} hPa</Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CurrentWeather;
