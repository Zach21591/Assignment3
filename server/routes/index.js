var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home'  
  });
});
*/

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home'  
  });
});


/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('index', { 
    title: 'About Me'  
  });
});


/* GET Products page.
router.get('/projects', function(req, res, next) {
  res.render('index', { 
    title: 'Projects'  
  });
});*/

/* GET Contact page. */
router.get('/contacts', function(req, res, next) {
  res.render('index', { 
    title: 'Contact Me'  
  });
});

module.exports = router;
