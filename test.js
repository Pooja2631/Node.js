const express=require('express');
const app=express();
app.get('/',function(req,res){
})
app.get('/About',function(req,res){
    res.send("This is Pooja Gupta from Navgurukul.I am looking for job.I know Python,JavaScript,HTML,CSS and Basic Nodejs.")
});
app.post('/Contact',function(req,res){
    res.send("This is number 6284282077.")
});
app.put('/Skills',function(req,res){
    res.send("I know Python,JavaScript,Basic Nodejs.")
});
app.listen(2000);