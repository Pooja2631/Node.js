// const express=require('express');
// const app=express();
// app.set('view engine','ejs');
// app.get('/profile/:name',function(req,res){
//     console.log(req.params.name)
//     res.render('Profile',{name:req.params.name})
// })

// app.listen(4000);


const express=require('express');
const app=express();
app.set('view engine','ejs');
app.get('/profile/:name',function(req,res){
    data={email:'Pooja@26',address:'Nodia',Skills:['Nodejs','JavaScript','Python']}
    res.render('Profile',{name:req.params.name,data:data})
})

app.listen(4000);