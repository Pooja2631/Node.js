// const  EventEmitter=require('events');
// const event=new EventEmitter();

// event.on("checkPage",(sc,msg)=>{
//     console.log(`status code is ${sc} and the page ${msg}`);
// });
// event.emit("checkPage",200,"ok");


const  EventEmitter=require('events');
const event=new EventEmitter();

event.on("sayMyName",()=>{
    console.log("your name is Pooja");
});

event.on("sayMyName",()=>{
    console.log("your name is deepti");
});

event.on("sayMyName",()=>{
    console.log("your name is neha");
});

event.emit("sayMyName");