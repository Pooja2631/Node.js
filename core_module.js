const fs=require('fs');

//creating a new file

fs.writeFileSync('read.txt', "This is Pooja")
fs.appendFileSync('read.txt',  'I know Basic node.js')

const buf_data=fs.readFileSync('read.txt');
org_data=buf_data.toString();
console.log(org_data)

// to rename the file

fs.renameSync('read.txt' ,'readwrite.txt');
