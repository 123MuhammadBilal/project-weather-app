import React from "react";
import { Box, Typography } from "@mui/material";
import theme from "../theme";

const Quality = ({currentDetails}) => {
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
        Air and Quality
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
              margin: "5px 10px",
            }}
          >
            Today
          </Typography>



          {currentDetails?.WeatherText ? (
          <Box
          className="weather_compo"
          sx={{
            width: "100px",
            height: "95px",
            marginLeft: "50px",
          }}
          component="img"
          // src={require(`../images/Overcast.png`)}
        // src={require(`../images/Overcast.png`) || require(`../images/${currentDetails?.WeatherText}.png`) } 
          src={require(`../images/${currentDetails?.WeatherText}.png`)}
          alt="icon not found"
        ></Box>
          ) : (
            <Box
            className="weather_compo"
            sx={{
              width: "100px",
              height: "95px",
              marginLeft: "50px",
            }}
            component="img"
            src={require(`../images/Overcast.png`)}
          // src={require(`../images/Overcast.png`) || require(`../images/${currentDetails?.WeatherText}.png`) } 
            // src={require(`../images/${currentDetails?.WeatherText}.png`)}
          ></Box>
          )}

        </Box>
        <Box
          className="weather_compo"
          sx={{
            color: theme.colorPalette.secondary.light,
            margin: "10px 18px",
            height: "110px",
          }}
        >
          <Typography>{currentDetails?.WeatherText}</Typography>
          <Typography
            sx={{
              fontSize: "15px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est,
            asperiores nemo expedita in facere!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Quality;
