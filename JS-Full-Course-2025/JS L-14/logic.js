function callName(name , out){
    console.log("Hi " + name);
    out();
}

function output(){
    console.log("This is a Output")
}

callName("Amit" , output);

// setTimeout(()=>{
//     console.log("Start")
//     setTimeout(()=>{
//         console.log("Step-1");
//         setTimeout(()=>{
//             console.log("Step-2")
//             setTimeout(()=>{
//                 console.log("Step-3")
//                 setTimeout(()=>{
//                     console.log("Step-4")
//                     setTimeout(()=>{
//                         console.log("Step-5")
//                     },1000)
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000)

let num = [ 1,2,3,4];
num.forEach((v , i)=>{
    console.log(i ,v);
})

let m = num.map((v, i)=>{
    return v*2;
})

let f = num.filter((v)=>{
    return v%2 === 0;
})

let r = num.reduce((inv , v)=>{
    return inv + v;

},10)

let items = [{item: "Shirt" , price: 500}, {item: "Jeans" , price: 1000},{item: "Shoes" , price: 1500}];
let item = items.reduce((inv , v)=>{
   return inv + v.price; 
}, 0)