import React from "react";
import { Box, Typography }  from "@mui/material";
import theme from "../theme";

const Footer = () => {
  return (
    <Box
      theme={theme}
      sx={{
        height: "60px",
        width: "86.7%;",
        display: "flex",
        margin:'0 auto',
        borderRadius: "10px",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: theme.colorPalette.primary.main,
        position:"fixed",
        bottom:0,
      }}
    >
        <Typography sx={{
          color:theme.colorPalette.secondary.main
        }}>CopyRight@2023</Typography>

    </Box>
  )
}

export default Footer