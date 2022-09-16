// function test ()
// {
//     console.log("Hello Deepti Chauhan")
// }
// test();

//API

var http=require('http');
http.createServer(function(req,res){
res.write("Hello coder deepti");
res.end();
}).listen(5000)