// const biodata={
//     name:"Pooja",
//     age:19,
//     skills:"I know Python,JavaScript,HTML,CSS and Basic Node.js.",
// };
// const jsonData=JSON.stringify(biodata);
// // console.log(jsonData)
// const objData=JSON.parse(jsonData);
// console.log(objData);



const fs=require('fs');
const biodata={
    name:"Pooja",
    age:19,
    skills:"I know Python,JavaScript,HTML,CSS and Basic Node.js.",
};
const jsonData=JSON.stringify(biodata);
fs.writeFile("json1.json",jsonData,(err)=>{
    console.log('done');
});
fs.readFile("json1.json","utf-8",(err,data)=>{
    const orgData=JSON.parse(data);
    console.log(orgData);
});
