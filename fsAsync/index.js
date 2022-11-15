const fs =require('fs');
// fs.writeFile('read.txt','Today is awesome day',(err)=>{
//     console.log('files is create')
//     console.log(err);
// });
// fs.appendFile('read.txt','Now,I am understand ',(err)=>{
//     console.log("node.js");
// });
fs.readFile('read.txt',"utf-8",(err,data)=>{
    console.log(data);
});