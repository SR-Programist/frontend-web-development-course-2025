// let n = prompt("Enter Your Number", "Enter Number Under 5");

// for(let i =1; i<=5; i++){
//     console.log(i)
// }

// // console.log("output of While");

// // while( n<=5){
// //     console.log(n);
// //     n++
// // }

// console.log("output of Do While Loop");

// do{
//     console.log("n=" + n);
//     n++
// } while(n<=5)

let obj = {
    name: "Sachin",
    age:20,
    coutry: "India"
}

for(let k in obj){
    console.log(k + ":" + obj[k])
}

let ary = ["apple", "Banana" , "Orange"];

for(let val of ary){
    console.log(val)
}

let a = "ABCD";

for(let l of a){
    console.log(l)
}