let express = require('express');
let app = express();

app.set('view engine', 'ejs')
// app.use(express.static(__dirname + "/public"));
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('index');
    // res.send("You've reached the home route!");
});

app.post('/', function (req, res) {
    console.log(req.body.city);
    res.render('index');  
  })

let port = 3000;
app.listen(port, () => console.log(`Weather App has started on ${port}`));