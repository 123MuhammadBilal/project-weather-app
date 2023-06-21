import React, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Autocomplete,
  InputAdornment,
  FormControlLabel,
  Switch,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import {onSearchCityData} from "../services/api"
import theme from "../theme";

const Header = () => {
  const [targetId, setTargetId] = useState("");
  const [query, setQuery] = useState("a");
  const [cities, setCities] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    if (targetId) {
      navigate(`/today/${targetId.LocalizedName}/${targetId?.Key}`);
    } else {
      return;
    }
  }, [targetId]);

  const onCitySearch = (e) => {
    if (query !== "") {
      onSearchCityData(query).then((response) => response.json())
      .then((apiData) => {
        setCities(apiData);
      })
      .catch((error) => {
        console.log(error);
      });
        
    } else {
      return;
    }
  };

  return (
    <Box
      theme={theme}
      sx={{
        height: "60px",
        width: "1170px",
        position: "fixed",
        display: "flex",
        margin: "0 auto",
        top: 0,
        zIndex: 999,
        borderRadius: "10px",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: theme.colorPalette.primary.main,
      }}
    >
      <Link className="homebutton" to={`/`}>
        {"Home"}
      </Link>

      <Autocomplete
        sx={{
          border: "2px solid #e0e0e0",
          borderRadius: "5px",
          width: "250px",
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }}
        size="small"
        disableClearable
        id="controllable-states-demo"
        // inputValue={query}
        onInputChange={(event, newInputValue) => {
          setQuery(newInputValue);
        }}
        onChange={(event, newValue) => {
          setTargetId(newValue);
          // navigate(`/today/${targetId?.LocalizedName}/${targetId?.Key}`)
          setTargetId(newValue);
        }}
        options={cities}
        getOptionLabel={(cityName) =>
          cityName.LocalizedName ? cityName.LocalizedName : ""
        }
        renderInput={(params) => (
          <TextField
            // value={query}
            placeholder="Search . . ."
            onChange={(e) => onCitySearch(e)}
            {...params}
            InputProps={{
              ...params.InputProps,
              type: "search",
              startAdornment: (
                <InputAdornment position="start">
                  {query ? "" : <SearchIcon />}
                </InputAdornment>
              ),
            }}
          />
        )}
      />
      <FormControlLabel
        sx={{ right: "0px", position: "absolute" }}
        control={<Switch />}
        color="default"
      />
    </Box>
  );
};

export default Header;
