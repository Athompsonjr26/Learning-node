var request = require('request');
function getWeather(city, callback) {
  request({
    url: 'http://api.openweathermap.org/data/2.5/weather',
    qs: {
      q: city,
      units: 'imperial',
      APPID: 'eac2948bfca65b78a8c5564ecf91d00e'
    }
  }, function(err, response, body) {
    if (err) {
      callback(err);
      return;
    }
    var data = JSON.parse(body);

    callback(null, data);
  });
}
getWeather('Montgomery, AL', function(err, data) {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log('Temperature:', data.main.temp);
});
