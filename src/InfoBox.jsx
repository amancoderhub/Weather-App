/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
// import CardActions from '@mui/material/CardActions';
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1584269394867-ac6beb31ae23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU3fHx3ZWF0aGVyJTIwYXBwfGVufDB8fDB8fHww";
  let COLD_URL =
    "https://images.unsplash.com/photo-1674407866481-a39b2239f771?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  let HOT_URL =
    "https://images.unsplash.com/photo-1675695759698-5aa675b7f972?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAxfHxob3QlMjB3ZWF0aGVyfGVufDB8fDB8fHww ";
  let RAIN_URL =
    " https://images.unsplash.com/photo-1708759284407-5b9f6fc8b231?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ3fHxyYWluJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  //  let info ={
  //                 city : "Wonderland",
  //                 feelslike: 24.28,
  //                 humidity:47,
  //                 temp:25.05,
  //                 tempMin:25.05,
  //                 tempMax:25.05,
  //                 weather:"haze",
  //      }

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? <ThunderstormIcon />
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
              {info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? <WbSunnyIcon/>
                : <AcUnitIcon/>}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temrature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Max-Temp={info.tempMax}&deg;C</p>
              <p>Min Temp={info.tempMin}&deg;C</p>
              <p>
                The Weather can be describe as <i>{info.weather}</i> and Feels
                like {info.feelslike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
