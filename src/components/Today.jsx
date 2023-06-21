import React, { useEffect, useState } from "react";
import { Box, Typography, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import theme from "../theme";
import { useParams, Link } from "react-router-dom";
import Weather from "./Weather";
import Daily from "./Daily";
import Quality from "./Quality";
import Activity from "./Activity";
import Hourly from "./Hourly";
import TodayForecast from "./TodayForecast";
import {
  onCurrentWeatherDetails,
  onHourlyWeatherDetails,
  onWeeklyWeatherDetails,
} from "../services/api";
//days rendering on the base of API DATE
const days = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];

const tabs = [
  { label: "Today", value: "1" },
  { label: "Daily", value: "2" },
  { label: "Hourly", value: "3" },
  { label: "Monthly", value: "4" },
  { label: "Healt and Quality", value: "5" },
];

const Today = () => {
  const { city, id } = useParams();
  //value of tab
  const [tabValue, setTabValue] = useState("1");
  // current weather details
  const [currentDetails, setCurrentDetails] = useState();
  // hourly weather Details
  const [hourlyDetails, setHourlyDetails] = useState();
  // Weekly weather details
  const [weeklyDetails, setWeeklyDetails] = useState();

  // on tab change event
  const onTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Promise.all
  //use effects works only id change
  //API for current details
  useEffect(() => {
    onCurrentWeatherDetails(id)
      .then((response) => response.json())
      .then((apiData) => {
        apiData.map((item) => setCurrentDetails(item));
      });
  }, [id]);

  //API for Hourly details
  useEffect(() => {
    onHourlyWeatherDetails(id)
      .then((response) => response.json())
      .then((apiData) => {
        setHourlyDetails(apiData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  // API for Weekly Details
  useEffect(() => {
    onWeeklyWeatherDetails(id)
      .then((response) => response.json())
      .then((apiData) => {
        setWeeklyDetails(apiData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  console.log("currentDetails", currentDetails);
  return (
    <Box
      sx={{
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        marginTop: "70px",
      }}
    >
      <Typography
        sx={{
          color: theme.colorPalette.primary.main,
          marginTop: "40px",
        }}
        variant="h4"
      >
        {city ? city : "City"}
      </Typography>
      <Box sx={{ width: "100%", margin: "40px auto" }}>
        <TabContext value={tabValue}>
          <Box
            sx={{
              width: "55%",
              margin: "0 auto",
            }}
          >
            <TabList onChange={onTabChange}>
              {tabs.map((item) => {
                return (
                  <Tab
                    sx={{
                      borderBottom: 1,
                      borderColor: "divider",
                      bgcolor: theme.colorPalette.secondary.main,
                      color: theme.colorPalette.primary.main,
                      margin: "0px 10px",
                      borderRadius: "15px",
                    }}
                    label={item.label}
                    value={item.value}
                  />
                );
              })}
            </TabList>
          </Box>

          <Box
            sx={{
              width: "90%",
              margin: "0 auto",
            }}
          >
            <TabPanel value="1">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    margin: "0 auto",
                  }}
                >
                  <Weather currentDetails={currentDetails} />
                </Box>
                <Box>
                  <Quality currentDetails={currentDetails} />
                </Box>
              </Box>
              <Typography
                sx={{
                  color: theme.colorPalette.primary.main,
                  marginTop: "40px",
                  display: "flex",
                }}
                variant="h4"
              >
                Health and Activities
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  margin: "10px -50px 0px",
                }}
              >
                <Activity />
                <Activity />
                <Activity />
                <Box>
                  <Link className="showMorearrow" to={`/today`}>
                    {">"}
                  </Link>
                </Box>
              </Box>
            </TabPanel>

            <TabPanel value="2">
              <Typography
                sx={{
                  color: theme.colorPalette.primary.main,
                  marginTop: "40px",
                  display: "flex",
                }}
                variant="h4"
              >
                Daily
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                <TodayForecast
                  weeklyDetails={weeklyDetails}
                  currentDetails={currentDetails}
                />

                {weeklyDetails?.DailyForecasts.map((item) => {
                  const date = new Date(item.Date);
                  let day = date.getDay();
                  console.log(day);
                  return (
                    <Daily
                      newDay={days[day]}
                      temp={item.Temperature.Minimum.Value}
                      weather={item.Day.IconPhrase}
                    />
                  );
                })}
              </Box>
            </TabPanel>
            <TabPanel value="3">
              <Typography
                sx={{
                  color: theme.colorPalette.primary.main,
                  marginTop: "40px",
                  display: "flex",
                }}
                variant="h4"
              >
                Hourly
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                {hourlyDetails?.map((item) => {
                  return (
                    <Hourly
                      newDay={"Hourly"}
                      temp={item.Temperature.Value}
                      weather={item.IconPhrase}
                    />
                  );
                })}
              </Box>
            </TabPanel>
            <TabPanel value="4">Item One</TabPanel>
            <TabPanel value="5">
              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{
                    color: theme.colorPalette.primary.main,
                    marginTop: "40px",
                  }}
                  variant="h4"
                >
                  Heath & Qualties
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                <Activity />
                <Activity />
                <Activity />
                <Activity />
                <Activity />
                <Activity />
                <Activity />
                <Activity />
                <Activity />
                <Activity />
                <Activity />
                <Activity />
                <Activity />
              </Box>
            </TabPanel>
          </Box>
        </TabContext>
      </Box>
    </Box>
  );
};

export default Today;
