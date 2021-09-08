"use strict";

const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const weather = require("./data/weather.json");

class Forecast {
  constructor(description, date) {
    this.description = description;
    this.date = date;
    Forecast.all.push(this);
  }
}
Forecast.all = [];

app.get("/", function (request, response) {
  response.send(
    "I am omar from 301 😄  "
  );
});


app.get("/weather", (request, response) => {
  const lon = request.query.lon;
  const city_name = request.query.city_name;
  const lat = request.query.lat;
  

  if (city_name) {
    const returnArray = weather.find((item) => {
      return item.city_name.toLowerCase() === city_name;
    });
    let arr1 = returnArray.data.map((data1) => {
      return new Forecast(
        ` Low of ${data1.low_temp}, high of ${data1.high_temp} with ${data1.weather.description} `,
        ` ${data1.datetime}`
      );
    });

    
    if (arr1.length) {
      response.json(arr1);
    } else {
      response.send("error: Something went wrong.");
    }
  } else {
    response.json(weather);
  }
});

let port = process.env.PORT || 3333;
app.listen(port, () => {});
