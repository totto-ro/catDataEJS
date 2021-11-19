
const express = require( 'express' );
const app = express();

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
app.use( express.static(__dirname + '/static') );

app.get("/cats", function (request, response){
    response.render('cats');
});

app.get("/", function (request, response){
    response.render('index');
});


app.listen(7077, function() {
    console.log("running on port 7077");
});

