var Temperature = require('./../js/temperature.js').temperatureModule;

var displayTemperature = function(location, temperatureData, degreeType) {
  debugger;
  $('.showWeather').text("The temperature in " + location + " is " + temperatureData + " degrees " + degreeType + ".");
};

$(document).ready(function() {
  var currentTemperatureObject = new Temperature();

  $('#temperature').click(function(event) {
    event.preventDefault();
    var location = $('#location').val();
    var degreeType = $('input:radio[name=degreeType]:checked').val();
    $('#location').val('');
    var temperature = currentTemperatureObject.getTemperature(location, displayTemperature, degreeType);
  });

});
