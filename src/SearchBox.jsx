import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "e57bb5d88a8c5906a5c74032276d8326";

  let getWeatherInfo = async () => {
    try{
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let jsonResoponse = await response.json();
    let result = {
      city: city,
      temp: jsonResoponse.main.temp,
      tempMin: jsonResoponse.main.temp_min,
      tempMax: jsonResoponse.main.temp_max,
      humidity: jsonResoponse.main.humidity,
      feelsLike: jsonResoponse.main.feels_like,
      weather: jsonResoponse.weather[0].description,
    };
    console.log(result);
    return result;
  } catch(err) {
    throw err;
  }
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    try{
    evt.preventDefault();
    console.log(city);
    setCity("");
    let newinfo = await getWeatherInfo();
    updateInfo(newinfo);
    } catch(err) {
    setError(true)

    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="City"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{color:"red"}}>No Such Place Exists!</p>}
      </form>
    </div>
  );
}
