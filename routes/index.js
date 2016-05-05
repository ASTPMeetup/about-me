var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'About Me',
    selfie: 'https://avatars2.githubusercontent.com/u/3208705?v=3&s=460',
    greeting: "Hi. I'm Seth. I am a Front End Developer.",
    skills: ['HTML','CSS','Javascript'],
    hobbies: ['Bike Riding','Soccer','Swimming']
  });
});

module.exports = router;
