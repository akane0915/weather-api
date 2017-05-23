var Weather = require('./../js/weather.js').weatherModule;

var displayHumidity = function(location, humidityData) {
  $('.showWeather').text("The humidity in " + location + " is " + humidityData + "%");
}

$(document).ready(function() {
  var currentWeatherObject = new Weather();

  $('#weather-location').click(function(event) {
    event.preventDefault();
    var location = $('#location').val();
    $('#location').val('');
    var humidity = currentWeatherObject.getWeather(location, displayHumidity);
  });

}); //document ready close
