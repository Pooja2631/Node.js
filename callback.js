// var add=function(a,b){
//     return a+b
// }

// console.log(add(12,23))

// function complex(add)
// {
//     console.log(add(26,4))
// }
// complex(function(a,b){
//     return a+b
// })

function show(x){
    return (x+5);
}
function display(callback){
    return callback(4);
}
console.log(display(show));