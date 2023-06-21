import React from "react";
import { Box, Typography } from "@mui/material";
import theme from "../theme";
// import clouds from "../images/electricCloud.png";

const Weather = ({currentDetails}) => {
  const current = new Date();
  // By default US English uses 12hr time with AM/PM
  const time = current.getHours() + ":" + current.getMinutes();
  console.log('currentDetails____',currentDetails)
  console.log('currentDetails____',currentDetails?.WeatherText)
  var img = `../images/${currentDetails?.WeatherText}.png`
  console.log('img____',img)
  return (
    <Box>
      <Typography
        sx={{
          color: theme.colorPalette.primary.main,
          textAlign: "left",
          marginLeft: "10px",
        }}
        variant="h4"
      >
        Weather
      </Typography>
      <Box
        theme={theme}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          margin: "10px",
          padding: "10px",
          width: "444px",
          bgcolor: theme.colorPalette.primary.main,
          borderRadius: "10px",
          boxShadow: "3px 6px 23px -10px",
        }}
      >
        <Box className="weather_compo">
          <Typography
            sx={{
              color: theme.colorPalette.secondary.light,
            }}
          >
            Current
          </Typography>
          <Typography
            variant="p"
            sx={{
              color: theme.colorPalette.secondary.light,
            }}
          >
            {time}
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: theme.colorPalette.secondary.light,
              margin: "22px 0px",
            }}
          >
            {currentDetails?.Temperature.Metric?.Value}°
          </Typography>
        </Box>

{currentDetails?.WeatherText ? (
        <Box
        className="weather_compo"
        sx={{
          width: "100px",
          height: "95px",
        }}
        component="img"
        // src={require(`../images/Overcast.png`)}
        src={require(`../images/${currentDetails?.WeatherText}.png`)}
        alt="icon not found"
      ></Box>
          ) : (
            <Box
            className="weather_compo"
            sx={{
              width: "100px",
              height: "95px",
            }}
            component="img"
            src={require(`../images/Overcast.png`)}
            // src={require(`../images/${currentDetails?.WeatherText}.png`)}
          ></Box>
          )}



        <Box className="weather_compo">
          <Typography className="weather_deta2">
            {currentDetails?.WeatherText}
          </Typography>
          <Typography className="weather_deta2">
            Wind {currentDetails?.Wind.Speed.Metric?.Value}{" "}
            {currentDetails?.Wind.Speed.Metric?.Unit}
          </Typography>
          <Typography className="weather_deta2">
            WindGust {currentDetails?.WindGust.Speed.Metric?.Value}{" "}
            {currentDetails?.WindGust.Speed.Metric?.Unit}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Weather;
