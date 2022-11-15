// const http=require('http');
// const server=http.createServer((req,res)=>{
//     console.log(req.url);
//     res.end('hello');
    
// });
// server.listen(8000)

const http=require('http')
const fs=require('fs');

const server=http.createServer((req,res)=>{
    fs.readFileSync(`${_dirname}/UserApi/userapi.json`,"utf-8")
    const objData=JSON.parse(data);

    if (req.url =="/"){
        res.end("home");
    }else if (req.url=="/about"){
        res.end("About");
    }else if (req.url=="/UserApi"){
        res.end("hello from the UserApi ");
        res.end(objData[2].name);
    }else{
        res.writeHead(404,{"content-type":"text/html"});
    }
    
});
server.listen(8000);
