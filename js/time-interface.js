var Time = require('./../js/time.js').timeModule;

$(document).ready(function () {
  function clock() {
    $('.showTime').text(moment().format("dddd, MMMM Do YYYY, HH:mm:ss"));
  }

  setInterval(clock, 1000);
});
