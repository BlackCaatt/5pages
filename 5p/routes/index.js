var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express!' });
});

module.exports = router;

/* Страница imagine dragons */
router.get("/ig",function(req,res,next){
 res.send("<h1>Страница Imagine Dragons</h1>")
})
/* Страница muse */
router.get("/muse",function(req,res,next){
 res.send("<h1>Страница Muse</h1>")
})
/* Страница Placebo */
router.get("/placebo",function(req,res,next){
 res.send("<h1>Страница Placebo</h1>")
})
/* Страница 21 pilots */
router.get("/21p",function(req,res,next){
 res.send("<h1>Страница Twenty one pilots</h1>")
})
/* Страница Artic Monkeys */
router.get("/am",function(req,res,next){
 res.send("<h1>Страница Совы</h1>")
})
