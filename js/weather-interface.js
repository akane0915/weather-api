var Weather = require('./../js/weather.js').weatherModule;

$(document).ready(function() {
  $('#weather-location').click(function() {
    event.preventDefault();
    var location = $('#location').val();
    console.log(location);
  });

}); //document ready close
