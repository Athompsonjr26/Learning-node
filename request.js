var request = require('request');

request({
  url:'http://api.openweathermap.org/data/2.5/weather',
    q: 'Atlanta, GA',
    units: 'imperial',
    APPID: 'eac2948bfca65b78a8c5564ecf91d00e'
}, function(err, response, body){
  var data = JSON.parse(body);
  console.log("weather: " + data.weather[0].description);
  
});
