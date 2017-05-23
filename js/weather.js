var apiKey = require('./../.env').apiKey;

function Weather () {
}

Weather.prototype.getWeather = function (location, displayHumidity) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=' + apiKey)
    .then(function(response) {
      displayHumidity(location, response.main.humidity);
    })
    .fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });
};
exports.weatherModule = Weather;
