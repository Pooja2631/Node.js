const express=require('express');
const app=express();

const checkUrl=function(req,res,next)
{
    console.log("current route is",req.originalUrl)
next();
}
app.use(checkUrl);
app.get('/',function(req,res){
})
app.get('/About',function(req,res){
    res.send("This is Pooja Gupta from Navgurukul.I am looking for job.I know Python,JavaScript,HTML,CSS and Basic Nodejs.")
});
app.post('/Contact',function(req,res){
    res.send("This is number 9876523452.")
});
app.put('/Skills',function(req,res){
    res.send("I know Python,JavaScript,Basic Nodejs.")
});
app.listen(2000);