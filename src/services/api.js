const onSearchCityData = (query) => {
  return fetch(
    `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=WuicSb1nkPxVCPWo64FLUR8rFw5eAlIV&q=${query}`
  );
};

const onCurrentWeatherDetails = (id) => {
  return fetch(
    `http://dataservice.accuweather.com/currentconditions/v1/${id}?apikey=WuicSb1nkPxVCPWo64FLUR8rFw5eAlIV&details=true`
  );
};

const onHourlyWeatherDetails = (id) => {
  return fetch(
    `http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${id}?apikey=WuicSb1nkPxVCPWo64FLUR8rFw5eAlIV&details=true&metric=true`
  );
};

const onWeeklyWeatherDetails = (id) => {
  return fetch(
    `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${id}?apikey=WuicSb1nkPxVCPWo64FLUR8rFw5eAlIV&details=true&metric=true`
  );
};

export {
  onSearchCityData,
  onCurrentWeatherDetails,
  onHourlyWeatherDetails,
  onWeeklyWeatherDetails,
};
