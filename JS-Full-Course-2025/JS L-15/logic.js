console.log("A");
setTimeout(()=>{
    console.log("this is a Timeout");
},3000)
console.log("B");
console.log("C");

let Pizza = new Promise((res , rej)=>{
    setTimeout(()=>{
        rej("Order Cancelled")
    },5000);
})
Pizza.then((d)=>{
    console.log(d)
})

Pizza.catch((e)=>{
    console.log(e);
})