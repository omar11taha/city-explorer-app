'use strict';
require('dotenv').config();
MOVIES_API_KEY=process.env.MOVIES_API_KEY;
const Moovies = require('../models/movie.model');
const { default: axios } = require("axios");
const Cache = require("../helper/cache.helper");
let cacheObject = new Cache();
const callMovie =async (request, response) => {
    // const lon = request.query.lon;
    const Time = 25000;
    const Seconds = (Date.now() - cacheObject.timeStamp) > Time;
    if (Seconds) {
     
      cacheObject = new Cache();
    }

    const MOVIES_API_KEY = process.env.MOVIES_API_KEY;
  
    const movies= await axios.get(`https://api.themoviedb.org/3/movie/550?api_key=${MOVIES_API_KEY}&key=${process.env.MOVIES_API_KEY}`)

    let arr2 = movies_name.production_companies.map((data1) => {
      return new Forecast(
        data1.movies.production_companies,data1.valid_date
      );
    });
    cacheObject.movies.push( {
      city_name:city_name,
      data:data,
    } );

console.log(arr2);
    // response.send(arr1);
    if (arr2.length) {
      response.json(arr2);
    } else {
      response.send("error: Something went wrong.");
      
    }
  }