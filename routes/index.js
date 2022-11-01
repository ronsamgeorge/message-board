var express = require('express');
var router = express.Router();


// test messages
const messages = [
  {
    text: "Hi there!",
    author: "Amando",
    added: new Date().toDateString()
  },
  {
    text: "Hello World!",
    author: "Charles",
    added: new Date().toDateString()
  }
];



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', messages:messages });
});

router.get('/new', function(req,res,next){
  res.render('form');
});

router.post('/new', function(req, res, next){
  messages.push({text: req.body.text, author: req.body.author, added : new Date().toDateString()});
  res.redirect("/");
  next();
});

module.exports = router;
