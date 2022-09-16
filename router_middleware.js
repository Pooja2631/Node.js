// const express=require('express');
// const app=express();
// const router=express.Router();
// const urlCheck=function(req,res,next){
//     console.log("current url is",req.originalUrl);
//     next();
// }
// app.get('/',function(req,res){
// })
// app.get('/About',function(req,res){
//     res.send("This is Pooja Gupta from Navgurukul.I am looking for job.I know Python,JavaScript,HTML,CSS and Basic Nodejs.")
// });
// router.put('/Skills',urlCheck,function(req,res){
//     res.send("I know Python,JavaScript,Basic Nodejs.")
// });
// app.use('/',router)
// app.listen(2000);

const express=require('express');
const app=express();
const router=express.Router();

const urlCheck=require('/other_middleware.js')
app.get('/',function(req,res){
})
app.get('/About',function(req,res){
    res.send("This is Pooja Gupta from Navgurukul.I am looking for job.I know Python,JavaScript,HTML,CSS and Basic Nodejs.")
});
router.put('/Skills',urlCheck,function(req,res){
    res.send("I know Python,JavaScript,Basic Nodejs.")
});
app.use('/',router)
app.listen(2000);