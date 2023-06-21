import React from "react";
import City from "./City";
import { Box, Typography } from "@mui/material";
import Map from "../images/map.png";
import theme from "../theme";
const Home = () => {
  const defaultCities = [






    { city: "Lahore", reg: "Punjab", id:'260622' },
    { city: "Peshawar", reg: "Kpk", id:'259370' },
    { city: "Karachi", reg: "Sindh", id:'261158' },
    { city: "Quetta", reg: "Blochistan", id:'257185' },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "cent",
        alignItems: "center",
        flexDirection: "column",
        margin: "50px 0px 20px",
      }}
    >
      <Typography
        sx={{
          color: theme.colorPalette.primary.main,
          marginTop: "40px",
        }}
        variant="h5"
      >
        Popular Cities
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {defaultCities.map((item) => {
          return <City city={item.city} reg={item.reg} id={item.id} />;
        })}
      </Box>
      <Box
        sx={{
          width: "100%",
          margin: "90px 0px",
          border: "4px solid #E07A5F",
          borderRadious: "5px",
        }}
        component="img"
        src={Map}
      ></Box>
    </Box>
  );
};
export default Home;
