var Temperature = require('./../js/temperature.js').temperatureModule;

var displayTemperature = function(location, temperatureData) {
  $('.showWeather').text("The temperature in " + location + " is " + temperatureData + " degrees fahrenheit.");
}

$(document).ready(function() {
  var currentTemperatureObject = new Temperature();

  $('#temperature').click(function(event) {
    event.preventDefault();
    var location = $('#location').val();
    $('#location').val('');
    var temperature = currentTemperatureObject.getTemperature(location, displayTemperature);
  });

});
