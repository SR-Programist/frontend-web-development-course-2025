const box = document.querySelector(".box");
let p = document.createElement("p");
p.innerText = "This is a pera"

box.append(p , "This is a Append")

// p.remove()

box.removeChild(p)

let Heading = document.querySelector("h1")
box.replaceChild(p , Heading)

let btn = document.querySelector("button");
let body = document.querySelector("body");

btn.addEventListener("click" , ()=>{
    body.style.backgroundColor = "yellow"
})