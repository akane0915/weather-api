var Temperature = require('./../js/temperature.js').temperatureModule;

var displayTemperature = function(location, temperatureData) {
  $('.showWeather').append("The temperature in " + location + " is " + temperatureData + ".<br>");
};

$(document).ready(function() {
  var currentTemperatureObject = new Temperature();

  $('#temperature').click(function(event) {
    event.preventDefault();
    var location = $('#location').val();
    var degreeType = $('input:radio[name=degreeType]:checked').val();
    var temperature = currentTemperatureObject.getTemperature(location, displayTemperature, degreeType);
  });

});
