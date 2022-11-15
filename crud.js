const fs =require('fs');
fs.mkdirSync('create');

fs.writeFileSync('create/bio.txt',"Pooja Gupta")
fs.appendFileSync('create/bio.txt',"I know Python,JavaScript,HTML,CSS and Basic Node js.")

const data=fs.readFileSync('create/bio.txt', "utf-8");
console.log(data)

fs.renameSync('create/bio.txt','create/myBio.txt')
fs.unlinkSync('create/myBio.txt')
fs.rmdirSync('create')