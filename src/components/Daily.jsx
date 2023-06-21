import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import theme from "../theme";

const Daily = (props) => {
  // const FahrenheitToCelsius = (props.temp - 32 * 5/9) ;
  // console.log('FahrenheitToCelsius' , FahrenheitToCelsius)
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
            width: "161px",
            height: "216px",
            bgcolor: theme.colorPalette.primary.main,
            borderRadius: "10px",
          }}
        >
          <Typography className="day_data">{props.newDay}</Typography>

          {props.weather ? (
             <Box
             component="img"
            //  src={require(`../images/Overcast.png`)}
             src={require(`../images/${props.weather}.png`)}
             alt="icon not found" 
           ></Box>
          ) : (
            <Box
            component="img"
            src={require(`../images/Overcast.png`)}
            // src={require(`../images/${props.weather}.png`)}
          ></Box>
          )}

         

          <Typography
            sx={{
              color: theme.colorPalette.secondary.light,
            }}
          >
            {props.city}
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: theme.colorPalette.secondary.light,
            }}
          >
            {props.temp}°
          </Typography>
          <Typography className="weather_deta">{props.weather}</Typography>
        </Box>
      </Box>
      <Box>
        <Link className="slid_arrow">{">"}</Link>
      </Box>
    </Box>
  );
};

export default Daily;
