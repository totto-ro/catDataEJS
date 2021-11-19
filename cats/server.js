
const express = require( 'express' );
const app = express();

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
app.use( express.static(__dirname + '/static') );

const cats = [
    {
        name : "Bacon",
        age : "3",
        favorite_food : "tuna",
        sleep : ['under the bed', 'in a sunbeam'],
        image : './images/cat01.jpg'
    },
    {
        name : "Wasabi",
        age : "1",
        favorite_food : "beef",
        sleep : ['top of refrigerator', 'next to the window'],
        image : './images/cat03.jpg'
    },
    {
        name : "Meowsiny",
        age : "6",
        favorite_food : "chicken",
        sleep : ["top of her dog's bed", "sofa"],
        image : './images/cat02.jpg'
    }
]

//render all cats
app.get("/cats", function (request, response){
    response.render( 'cats', {cats} );
});

//render one cat
app.get("/:name", function (request, response){
    let name = request.params.name;

    let result = cats.find( cat => {
        if( cat.name === name ){
            return cat;
        }
    });
    console.log( "Result", result );

    if( result === undefined ){
        response.render( 'info', {found: false} );
    }
    else{
        response.render( 'info', {found: true, kitty: result } );
    }
});


app.listen(7077, function() {
    console.log("running on port 7077");
});

