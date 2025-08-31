const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");
let body = document.querySelector("body");

btn1.addEventListener("click", ()=>{
    body.classList.add("dark")
});

btn2.addEventListener("click", ()=>{
    body.classList.remove("dark")
});

btn3.addEventListener("click", ()=>{
    body.classList.toggle("dark")
});

let pera1= document.querySelector(".pera-1");
let perant = pera1.parentElement

// console.log(perant.children)
// console.log(perant.firstElementChild)
// console.log(perant.lastElementChild)

let pera2 = document.querySelector(".pera-2");
console.log(pera2.previousElementSibling)
console.log(pera2.nextElementSibling)

setTimeout(()=>{
    let p = document.createElement("p");
    p.innerText = "set time out is work";
    body.append(p)
} , 2000)

let timer = document.querySelector(".timer");
let t = 0;
let time = setInterval(() => {
    t++;
    timer.innerText = t;
}, 1000);

setTimeout(()=>{
    clearInterval(time)
}, 10000)
