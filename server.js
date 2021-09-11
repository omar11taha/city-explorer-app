"use strict";

const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
// const weather = require("./data/weather.json");
// const MOVIES = require("./data/MOVIES.json");
// const { default: axios } = require("axios");
// const Forecast = require('./models/weather.model');
// const Moovies = require('./models/movie.model');
const callWeather = require('./controller/weather.controller');
// const Forecast = require('./models/weather.model');
require('dotenv').config();

// class Forecast {
//   constructor(description, date) {
//     this.description = description;
//     this.date=date;
//     Forecast.all.push (this);
//   }
// }
// Forecast.all = [];

app.get("/", function (request, response) {
  response.send(
    "I am omar from 301 😄  "
  );
});
// ${process.env.REACT_APP_SERVER_URL}/weather?city_name=${location}

app.get("/weather", callWeather);

  
  app.get("/MOVIES", callMovie)


let port = process.env.PORT || 3333;
app.listen(port, () => {});
