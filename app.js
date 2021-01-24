const express = require('express');
//express app (instanciate)
const app = express();



//middleware & satic files directory
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// listen for requests
app.listen(3000);

// Register View Engine
app.set('view engine', 'ejs');

app.get('/home', (req, res) => {
    // res.send('<h1>Hi from Rishav</h1>');
  res.render('home');
  });

app.get('/', (req, res) => {
  res.redirect('/Home');
});

app.post('/Login', (req, res) => {
    console.log(req.body);
    res.render("login",{name:req.body.name});
  });  