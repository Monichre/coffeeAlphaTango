// server.js

// BASE SETUP
// call the packages we need
var Coffee = require('./models/coffee');

var express    = require('express'),        // call express
    app        = express(),                 // define our app using express
    bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Add CORS headers
app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "http://localhost:4200");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    response.header("Access-Control-Allow-Resource", "*");
    response.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
});

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API

var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(request, response) {
    response.json({ message: 'hooray! welcome to our api!' });
});

// more routes for our API will happen here

//test routes ending with coffeeshops
router.route('/coffees')


  // create a coffee(shop) accessed at POST http://localhost:8080/api/v1/coffees
  .post(function(request, response){
    var coffeeShop = new Coffee(); // new instance of the model
    console.log(coffeeShop);
    coffeeShop.name = request.body.name;
    coffeeShop.address = request.body.address;

    coffeeShop.save(function(error){
      if(error)
        response.send(error);

      response.json({message:'coffeeShop created!'});
    });

  })

  // get all coffee(shops) accessed at  http://localhost:8080/api/v1/coffees
  .get(function(request, response){
    Coffee.find(function(error, coffees){
      if (error) response.send(error);
      response.json(coffees);
    });
  })

  //routes by id -- coffeeshops/:coffee_id
router.route('/coffees/:coffee_id')

  .get(function(request, response){
    Coffee.findById(request.params.coffee_id, function(error, coffee){
      if(error) response.send(error);
      response.json(coffee);
    });
  })
  // update the coffee shop with this Id
  .put(function(request, response){
    Coffee.findById(request.params.coffee_id, function(error, coffee){
      if(error) response.send(error);
      //update
      coffeeShop.name=request.body.name;
      coffeeShop.address=request.body.address;
      //save the udpate
      coffeeShop.save(function(error){
        if(error) response.send(error);
        response.json({message:'updated!'});
      });
    });
  })

  .delete(function (request, response){
    Coffee.remove({
      _id:request.params.coffee_id
    }, function(error, coffee){
      if(error) res.send(error);

      response.json({message: 'Successfully Deleted'});
    });
  });




// REGISTER OUR ROUTES
// all of our routes will be prefixed with /api/v1
app.use('/api/v1/', router);

// START THE SERVER
app.listen(port);
console.log('Magic happens on port ' + port);

//*****************************************************************************
//Database
var mongoose = require('mongoose');
mongoose.connect('mongodb://ellisliam:8milero@ds025802.mlab.com:25802/coffee_db');
