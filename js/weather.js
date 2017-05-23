function Weather (city, tmpF, tmpC, humidity) {
  this.city = city;
  this.tmpF = tmpF;
  this.tmpC = tmpC;
  this.humidity = humidity;
}

exports.weatherModule = Weather;
