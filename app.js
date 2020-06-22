let express = require('express');
let app = express();
let weather = require('weather-js');


app.set('view engine', 'ejs')
app.use(express.static('public'));


app.get('/', function (req, res) {
    res.render('index', {weather: null, error: null});
  })

app.get('/weather/', function (req, res) {
    weather.find({search: req.query.zipcode, degreeType: 'F'}, function(err, result) {
        if(err) {
            console.log(err);
            console.log(JSON.stringify(result, null, 2));
        }
        res.render('forecast.ejs', {query: req.query.zipcode, result: result[0]})  
    });
})
 
 
let port = 3000;
app.listen(port, () => console.log(`Weather App has started on ${port}`));

