const express = require('express');
const weather = require('weather-js');
const app = express();

app.set('view engine', 'ejs');

/* ------------------- Routes -------------- */

//   - `/`: homepage that includes some instructions for the user, and a form that includes a text input and a submit button. The text input should query for a zipcode, and the form should then as a post method send the zipcode to your backend for use. This route should take both GET and POST methods. 
app.get('/', (req, res) => {
  res.render('home');
})

// - `/weather/:zipcode`: a GET route that returns the weather data for whichever zipcode the user passes to route; this is a results page that displays the weather in the location given by the user. Display whichever data points from your `Weather-JS` call that you find relevant/interesting. 
app.get('/weather/:zipcode', (req, res) => {
  // Literally just took it from the docs
  weather.find({search: req.params.zipcode, degreeType: 'F'}, function(err, result) {
    if(err) {
      console.log('💩💩💩💩💩💩💩💩💩💩💩💩💩💩')
      console.log(err);
    }
    res.send(result)
    // res.render('results', { zipcode: req.params.zipcode, result: result[0] })
  });
  // res.send(`Results for ${req.params.zipcode}`);
})

app.listen(3000, () => console.log("☕️ You're listening to the smooth sounds of port 3000 ☕️"));