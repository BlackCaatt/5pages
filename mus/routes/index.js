var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/",function(req,res,next){
  res.render('homepage',{
     title:"Музыкальные группы:",
     pictureh1: "images/ig.jpg",
     pictureh2: "images/muse.jpg",
     pictureh3: "images/am.jpg",
     pictureh4: "images/placebo.jpg",
     pictureh5: "images/21p.jpg",
     about: "Imagine Dragons (дословно «Вообрази драконов») — американская инди-рок группа, образованная в Лас-Вегасе в 2008 году. Стали известны после выпуска дебютного студийного альбома Night Visions в сентябре 2012 года. Американский журнал Billboard назвал их самыми яркими новыми звёздами 2013 года[8], а журнал Rolling Stone назвал их сингл «Radioactive» самым большим рок-хитом года[9]."
     })
})

/* Страница Imagine Dragons */
router.get("/ig",function(req,res,next){
  res.render('hero',{
     title:"Imagine Dragons",
     picture: "images/ig.jpg",
     picture1: "images/igrl.jpg",
     about: "Музыка группы Imagine Dragons несет в себе какой-то сверхъестественный заряд позитива, который магнетически притягивает меломанов с абсолютно разными вкусами.сновные стили, в которых играют участники Imagine Dragons – альтернативный и инди-рок. Но музыканты не ограничиваются только этими жанрами. В их творчестве немало поп-рока и электроники, а местами «проскакивают» даже фолк-рок и хип-хоп.В отличии от молодых рок-групп, которые годами не могут перебраться из гаражей на сцену, этот необычный коллектив практически сразу же заявил о себе, как о новой звезде в мире современной рок-музыки."
     })
})
/* Страница Muse */
router.get("/muse",function(req,res,next){
  res.render('hero',{
     title:"Muse",
     picture: "images/muse.jpg",
     picture1: "images/muserl.jpg",
     about: "lul"
     })
})
/* Страница 21 pilots */
router.get("/21p",function(req,res,next){
  res.render('hero',{
     title:"Twenty one pilots",
     picture: "images/21p.jpg",
     picture1: "images/21prl.jpg",
     about: "lul"
     })
})
/* Страница placebo */
router.get("/placebo",function(req,res,next){
  res.render('hero',{
     title:"Placebo",
     picture: "images/placebo.jpg",
     picture1: "images/placeborl.jpg",
     about: "lul"
     })
})
/* Страница Artic Monkeys */
router.get("/am",function(req,res,next){
  res.render('hero',{
     title:"Artic Monkeys",
     picture: "images/am.jpg",
     picture1: "images/amrl.jpg",
     about: "lul"
     })
})

module.exports = router;
