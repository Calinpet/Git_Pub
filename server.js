// REQUIRE DEPENDENCIES
const express = require('express');

// INITIALIZE EXPRESS APP
const app = express();
const port = 3000;

// DEFINE OUR ROUTES
app.get("/", (req, res)=>{
  res.send('Welcome to the gitPub App!');
});

//initialize express
const drinks = require("./models/drinks.js")
const food = require("./models/food.js")

app.get("/drinks/", (req, res)=>{
  res.render('drinks_index.ejs', {
    allDrinks: drinks,
  })
}); 

app.get("/food/", (req, res)=>{
  res.render('food_index.ejs', {
    allFood: food,
  })
}); 

app.get("/drinks/:indexOfDrinksArray", (req, res)=>{
  res.render('drinks_show.ejs', {
    drink: drinks[req.params.indexOfDrinksArray],
  })
});

app.get("/food/:indexOfFoodArray", (req, res)=>{
  res.render('food_show.ejs', {
    food: food[req.params.indexOfFoodArray],
  })
});

app.get("/drinks/:id", (req, res)=>{
  res.send(req.params.id)
})

app.get("/food/:id", (req, res)=>{
  res.send(req.params.id)
})

// TELL OUR APP TO LISTEN ON PORT...
app.listen(3000, ()=>{
  console.log(`listening on port `, 3000)
});