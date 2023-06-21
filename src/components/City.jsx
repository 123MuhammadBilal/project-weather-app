import React from "react";
import electricCloud from "../images/electricCloud.png";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import theme from "../theme";

const City = (props) => {
  return (
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
          width: "255px",
          bgcolor: theme.colorPalette.primary.main,
          borderRadius: "10px",
          boxShadow: "3px 6px 23px -10px",
        }}
      >
        <Box component="img" src={electricCloud}></Box>
        <Typography
          sx={{
            color: theme.colorPalette.secondary.light,
          }}
        >
          {props.city}
        </Typography>
        <Typography
          variant="p"
          sx={{
            color: theme.colorPalette.secondary.light,
          }}
        >
          {props.reg}
        </Typography>
        <Link className="nextarrow" to={`/today/${props.city}/${props.id}`}>
          {">"}
        </Link>
      </Box>
    </Box>
  );
};

export default City;
