'use strict';

class Forecast {
    constructor(description, date) {
      this.description = description;
      this.date=date;
      Forecast.all.push (this);
    }
  }

  module.exports = Forecast;