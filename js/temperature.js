var apiKey = require('./../.env').apiKey;

function Temperature () {
}

Temperature.prototype.getTemperature = function (location, displayTemperature, degreeType) {

  var convertKelvin = function (k, degreeType) {
    var degrees;
    if (degreeType == 'Celsius') {
      degrees = (parseFloat(k)-273.15).toFixed(2).toString() + "\u2103";
    } else {
      degrees = (((parseFloat(k)-273)*1.8)+32).toFixed(2).toString() + "\u2109";
    }
    return degrees;
  };

  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=' + apiKey)
    .then(function(response) {
      displayTemperature(location, convertKelvin(response.main.temp, degreeType));
    })
    .fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });

};

exports.temperatureModule = Temperature;
