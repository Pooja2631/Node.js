// async function getData(){

//         try{
//         const postsPromise=axios.get("https://jsonplaceholder.typicode.com/posts");
//         const usersPromise=axios.get("https://jsonplaceholder.typicode.com/posts");
    
//         const posts=await postsPromise;
//         const user=await  usersPromise;
//         }catch(err){
//             console.log("err",err)
//         }
//     }
//     getData();


// const https = require('https')
// const url =
// 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/40,-75'
// const request = https.request(url, (response) => {
//  let data = ''
//  response.on('data', (chunk) => {
//  data = data + chunk.toString()
//  })
//  response.on('end', () => {
//  const body = JSON.parse(data)
//  console.log(body)
//  })
// })
// request.on('error', (error) => {
//  console.log('An error', error)
// })
// request.end()


// fetch('http://localhost:3000/weather?address=Boston').then((response) => {
//  response.json().then((data) => {
//  if (data.error) {
//  console.log(data.error)
//  } else {
//  console.log(data.location)
//  console.log(data.forecast)
//  }
//  })
// })


// async

async function deepti(){
    console.log('Inside deepti function');
    const response =await fetch('https://api.github.com/users');
    return "vishal";
}

console.log("Before calling deepti")
let a=deepti();
console.log("After calling deepti")
console.log(a);
console.log("Last line of this js file")
