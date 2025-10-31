import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
    const [WeatherInfo, setWeatherInfo] = useState({
    city: "Gujarat",
    feelslike: 24,
    temp: 25,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
  });

  let updateInfo = (newinfo) => {
    setWeatherInfo(newinfo);
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather App</h1>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox Info={WeatherInfo}/>
    </div>
  );
}
