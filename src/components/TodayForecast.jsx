import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import theme from "../theme";

const TodayForecast = ({ weeklyDetails, currentDetails }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Box>
        <Box
          theme={theme}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            margin: "10px",
            padding: "10px",
            width: "160px",
            bgcolor: theme.colorPalette.primary.main,
            borderRadius: "10px",
          }}
        >
          <Typography className="day_data">Today</Typography>

          {currentDetails?.WeatherText ? (
            <Box
              sx={{
                height: "64px",
                width: "100px",
              }}
              component="img"
              src={require(`../images/${currentDetails?.WeatherText}.png`)}
              alt="icon not found"
            ></Box>
          ) : (
            <Box
              sx={{
                height: "64px",
                width: "100px",
              }}
              component="img"
              src={require(`../images/Overcast.png`)}
            ></Box>
          )}

          <Typography
            variant="h4"
            sx={{
              color: theme.colorPalette.secondary.light,
            }}
          >
            {weeklyDetails?.DailyForecasts[0].Temperature.Minimum.Value}°
          </Typography>
          <Typography className="weather_deta">
            {currentDetails?.WeatherText}
          </Typography>
        </Box>
      </Box>
      <Box className="weather_compo2">
        <Typography className="weather_deta2">
          {currentDetails.WeatherText}
        </Typography>
        <Typography className="weather_deta2">
          Wind {currentDetails?.Wind.Speed.Metric?.Value}{" "}
          {currentDetails?.Wind.Speed.Metric?.Unit}
        </Typography>
        <Typography className="weather_deta2">
          WindGuest{currentDetails?.WindGust.Speed.Metric.Value}{" "}
          {currentDetails?.WindGust.Speed.Metric.Unit}
        </Typography>
        <Typography className="weather_deta2">
          Clouds {currentDetails.CloudCover}
        </Typography>
        <Typography className="weather_deta2">
          DewPoint {currentDetails?.DewPoint.Metric.Value}
        </Typography>
      </Box>
      <Box>
        <Link className="slid_arrow2">{">"}</Link>
      </Box>
    </Box>
  );
};

export default TodayForecast;
