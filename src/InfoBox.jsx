import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
// import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
// import AcUnitIcon from "@mui/icons-material/AcUnit";
// import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function InfoBox({ Info }) {
  const INIT_URL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfav-S7nmyC_r-QMdnPLDgduVatlBDpSXxKQ&s";
  let HOT_URL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsl9l-OJjDQGJMRzMb3CYp8rVdpbXnYHVF6g&s";
  let COLD_URL =
    "https://www.findingtheuniverse.com/wp-content/uploads/2017/01/Blue2Bhour2BFinland_by_Laurence2BNorah.jpg";
  let RAIN_URL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO4Nd91a3BLfY1UAKW6OlHm-ethmi0V7DIbRUyjjTN4nE-641e_iDAgg0JLB_S2tBXwq0&usqp=CAU";
  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              Info.humidity > 80
                ? RAIN_URL
                : Info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {Info.city}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <div>Temperature = {Info.temp}&deg;C</div>
              <p>Humidity = {Info.humidity}</p>
              <p>Min Temp = {Info.tempMin}&deg;C</p>
              <p>Max Temp = {Info.tempMax}&deg;C</p>
              <p>
                The Weather can be described as {Info.weather} and feels like{" "}
                {Info.feelslike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
