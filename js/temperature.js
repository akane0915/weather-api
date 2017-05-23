var apiKey = require('./../.env').apiKey;

function Temperature () {
}

Temperature.prototype.getTemperature = function (location, displayTemperature) {
  var fahrenheit = function (k) {
    return (((parseFloat(k)-273)*1.8)+32).toFixed(2);
  }
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=' + apiKey)
    .then(function(response) {
      displayTemperature(location, fahrenheit(response.main.temp));
    })
    .fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });

};

exports.temperatureModule = Temperature;
