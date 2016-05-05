var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'About Me',
    self: 'https://scontent-dfw1-1.xx.fbcdn.net/v/t1.0-9/1538871_10154662456672519_6143333486332393626_n.jpg?oh=605beacaa668bd63d7188f01061d3d7e&oe=57DFB156',
    greeting: 'Hi, my name is Piero. I am a front-end web developer in Austin, TX. I love building stuff!',
    skills: ['HTML','CSS','Javascript', 'Bootstrap', 'Express.js', "Jquery", "Underscore.js"],
    hobbies: ['Playing FIFA 16','Hiking','Reading', 'Doing backflips']
  });
});

module.exports = router;
