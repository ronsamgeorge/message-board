var express = require('express');
var router = express.Router();


// test messages
const messages = [
  {
    text: "Hi there!",
    author: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    author: "Charles",
    added: new Date()
  }
];



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', messages:messages });
});

router.get('/new', function(req,res,next){
  res.render('form');
});

module.exports = router;
