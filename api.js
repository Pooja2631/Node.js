var http=require('http');
var data=[
    {name:"Pooja",age:"19",email:"poojagupta21@navgurukul.org"},
    {name:"Deepti",age:"20",email:"deeptichauhan20navgurukul.org"}
]
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'application\json'})
res.write(JSON.stringify(data));
res.end();
}).listen(3900)

// var http=require('http');
// var page=`<h1>Hello Miss Deepti</h1>
// <input type='text'/><br>`
// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type':"text/html"})
//     res.write(page);
//     res.end();
// }).listen(4000)


// var http=require('http');
// var uc=require('upper-case')
// http.createServer(function(req,res){
//     res.write(uc.upperCase("node web page"));
//     res.end();
// }).listen(4000)