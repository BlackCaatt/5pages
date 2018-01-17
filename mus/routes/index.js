var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/",function(req,res,next){
  res.render('hero',{
     title:"Imagine Dragons",
     picture: "images/ig.jpg",
     about: "Imagine Dragons (дословно «Вообрази драконов») — американская инди-рок группа, образованная в Лас-Вегасе в 2008 году. Стали известны после выпуска дебютного студийного альбома Night Visions в сентябре 2012 года. Американский журнал Billboard назвал их самыми яркими новыми звёздами 2013 года[8], а журнал Rolling Stone назвал их сингл «Radioactive» самым большим рок-хитом года[9]."
     })
})

/* Страница Imagine Dragons */
router.get("/ig",function(req,res,next){
  res.render('hero',{
     title:"Imagine Dragons",
     picture: "images/ig.jpg",
     about: "Imagine Dragons (дословно «Вообрази драконов») — американская инди-рок группа, образованная в Лас-Вегасе в 2008 году. Стали известны после выпуска дебютного студийного альбома Night Visions в сентябре 2012 года. Американский журнал Billboard назвал их самыми яркими новыми звёздами 2013 года[8], а журнал Rolling Stone назвал их сингл «Radioactive» самым большим рок-хитом года[9]."
     })
})
/* Страница Muse */
router.get("/muse",function(req,res,next){
  res.render('hero',{
     title:"Muse",
     picture: "images/muse.jpg",
     about: "lul"
     })
})
/* Страница 21 pilots */
router.get("/21p",function(req,res,next){
  res.render('hero',{
     title:"Twenty one pilots",
     picture: "images/21p.png",
     about: "lul"
     })
})
/* Страница placebo */
router.get("/placebo",function(req,res,next){
  res.render('hero',{
     title:"Placebo",
     picture: "images/placebo.png",
     about: "lul"
     })
})
/* Страница Artic Monkeys */
router.get("/am",function(req,res,next){
  res.render('hero',{
     title:"Artic Monkeys",
     picture: "images/am.jpg",
     about: "lul"
     })
})

module.exports = router;
