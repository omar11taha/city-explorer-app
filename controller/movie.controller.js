'use strict';
require('dotenv').config();
MOVIES_API_KEY=process.env.MOVIES_API_KEY;
const Moovies = require('../models/movie.model');
const { default: axios } = require("axios");
const callMovie =async (request, response) => {
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