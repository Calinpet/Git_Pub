// REQUIRE DEPENDENCIES
const express = require('express');

// INITIALIZE EXPRESS APP
const app = express();
const port = 3000;

// DEFINE OUR ROUTES
app.get("/", (req, res)=>{
  res.send('Welcome to the Gitpub App!');
});

const drinks = require("./models/drinks.js")

app.get("/drinks/", (req, res)=>{
  res.render('drinks_index.ejs', {
    allDrinks: drinks,
  })
}); 

// TELL OUR APP TO LISTEN ON PORT...
app.listen(3000, ()=>{
  console.log(`listening on port `, 3000)
});