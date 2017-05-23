var Weather = require('./../js/weather.js').weatherModule;

var displayHumidity = function(location, humidityData) {
  $('.showWeather').append("The humidity in " + location + " is " + humidityData + "%<br>");
};

$(document).ready(function() {
  var currentWeatherObject = new Weather();

  $('#humidity').click(function(event) {
    event.preventDefault();
    var location = $('#location').val();
    var humidity = currentWeatherObject.getWeather(location, displayHumidity);
  });

}); //document ready close
