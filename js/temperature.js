var apiKey = require('./../.env').apiKey;

function Temperature () {
}

Temperature.prototype.getTemperature = function (location, displayTemperature) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=' + apiKey)
    .then(function(response) {
      displayTemperature(location, response.main.temp);
    })
    .fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });
};

exports.temperatureModule = Temperature;
