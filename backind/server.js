'use strict';

const express = require('express') 
const app = express() 
const cors = require('cors');
app.use(cors()) 

const weather = require('./data/weather.json')

app.get('/', 
  function (target, sorce) { 
    sorce.send('take care about your time :alarm_clock: :') 


app.get('/get-weather', (target, sorce) => {
  console.log(target.query.type);
  const type = target.query.type;
 
  if (type) {
    const returnArray = weather.filter((item) => {
      return item.type === type;
    });

    if (returnArray.length) {
      sorce.json(returnArray);
    } else {
      sorce.send(' data not found 😥')
    }
  } else {
    sorce.json(weather);
  }
})



app.listen(3001, () => {
  console.log(`Server starte`);
});})