import React from "react";
import { Box, Typography } from "@mui/material";
import theme from "../theme";
import image from "../images/activityImage.png";

const Activity = () => {
  return (
    <Box
      theme={theme}
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "row",
        margin: "5px",
        padding: "10px",
        width: "220px",
        bgcolor: theme.colorPalette.primary.main,
        borderRadius: "10px",
        boxShadow: "3px 6px 23px -10px",
      }}
    >
      <Box className="activity_compo">
        <Box component="img" src={image}></Box>
        <Typography
          sx={{
            color: theme.colorPalette.secondary.light,
          }}
        >
          Current
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: theme.colorPalette.secondary.light,
          }}
        >
          30°
        </Typography>
      </Box>
    </Box>
  );
};

export default Activity;
