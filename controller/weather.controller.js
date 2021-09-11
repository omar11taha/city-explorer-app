"use strict";
require('dotenv').config();
WEATHER_KEY=process.env.WEATHER_KEY;
const Forecast = require('../models/weather.model');
const { default: axios } = require("axios");
const Cache = require("../helper/cache.helper");
let cacheObject = new Cache();
const callWeather= async (request, response) => {
  // const lon = request.query.lon;
  const city_name = request.query.city_name;
  // const lat = request.query.lat;
  const Time = 30000;
  const Seconds = (Date.now() - cacheObject.timeStamp) > Time;
  if (Seconds) {
   
    cacheObject = new Cache();
  }
  // console.log(request. query);
  if (city_name) {
    // https://api.weatherbit.io/v2.0/forecast/daily?city=amman&key=2cc93e8b21454643b2a74f690e759280
    // console.log(process.env.WEATHER_KEY);
    const weatherData = await axios.get(
      `https://api.weatherbit.io/v2.0/forecast/daily?city=${city_name}&key=${process.env.WEATHER_KEY}`
    );
    // console.log(weatherData.data.data);
    // const returnArray = weather.find((item) => {
    //   return item.city_name.toLowerCase() === city_name;
    // });
  }

  let arr1 = weatherData.data.data.map((data1) => {
    return new Forecast(data1.weather.description, data1.valid_date);
  });
  cacheObject.forCast.push( {
    city_name :city_name ,
    data: data ,
  } );
  console.log(arr1);
  // response.send(arr1);
  if (arr1.length) {
    response.json(arr1);
  } else {
    response.send("error: Something went wrong.");
  
}}
controller.exports = callWeather;