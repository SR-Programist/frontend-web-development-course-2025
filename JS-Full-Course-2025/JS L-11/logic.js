const Heading = document.getElementsByTagName("h1");

let p = document.getElementsByClassName("pera");

let imp = document.getElementById("imp");

let box = document.querySelectorAll(".box");

imp.innerHTML = "<p>This is div Pera</p>";

let a = document.querySelector("a");

function addLink(){
    a.setAttribute("href" , "htpps://www.google.com")
}


let face = document.querySelector(".facebook").getAttribute("href");

let btn = document.querySelectorAll("button");

function showMe(){
    btn[1].removeAttribute("disabled")
}

Heading[0].style.backgroundColor = "yellow";
