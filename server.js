"use strict";

const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const weather = require("./data/weather.json");
const MOVIES = require("./data/MOVIES.json");
const { default: axios } = require("axios");

require('dotenv').config();

class Forecast {
  constructor(description, date) {
    this.description = description;
    this.date=date;
    Forecast.all.push (this);
  }
}
Forecast.all = [];

app.get("/", function (request, response) {
  response.send(
    "I am omar from 301 😄  "
  );
});
// ${process.env.REACT_APP_SERVER_URL}/weather?city_name=${location}

app.get("/weather",async (request, response) => {
  // const lon = request.query.lon;
  const city_name = request.query.city_name;
  // const lat = request.query.lat;
  
// console.log(request.query);
  if (city_name) {

// https://api.weatherbit.io/v2.0/forecast/daily?city=amman&key=2cc93e8b21454643b2a74f690e759280
// console.log(process.env.WEATHER_KEY);
const weatherData= await axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city_name}&key=${process.env.WEATHER_KEY}`)
// console.log(weatherData.data.data);
    // const returnArray = weather.find((item) => {
    //   return item.city_name.toLowerCase() === city_name;
    // });
    let arr1 = weatherData.data.data.map((data1) => {
      return new Forecast(
        data1.weather.description,data1.valid_date
      );
    });
console.log(arr1);
    // response.send(arr1);
    if (arr1.length) {
      response.json(arr1);
    } else {
      response.send("error: Something went wrong.");
      
    }

  } 
  },
  app.get("/MOVIES",async (request, response) => {
    // const lon = request.query.lon;
    const MOVIES_API_KEY = process.env.MOVIES_API_KEY;
  
    const movies= await axios.get(`https://api.themoviedb.org/3/movie/550?api_key=${MOVIES_API_KEY}&key=${process.env.MOVIES_API_KEY}`)

    let arr2 = movies_name.production_companies.map((data1) => {
      return new Forecast(
        data1.movies.production_companies,data1.valid_date
      );
    });
console.log(arr2);
    // response.send(arr1);
    if (arr2.length) {
      response.json(arr2);
    } else {
      response.send("error: Something went wrong.");
      
    }
  }
))

let port = process.env.PORT || 3333;
app.listen(port, () => {});
