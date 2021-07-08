const request = require('request');
 
exports.getMeta = function (req, res) {
  let url = 'http://ip-api.com/json';
 
  if (process.env.NODE_ENV === 'production') {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    url += `/${ip}`
  }
 
  request(url, function (error, response) {
    if (!error && response.statusCode == 200) {
      const geo = JSON.parse(response.body);
      return res.json(geo);
    } else {
      return res.send(422).send({ errors: 'Cannot get location from IP' })
    }
  })
}