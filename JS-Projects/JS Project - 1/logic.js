let btn = document.querySelector(".mode button");
let body = document.querySelector("body");

let changeMode = ()=>{
    if(body.style.backgroundColor == "white"){
        body.style.backgroundColor = "black"
        body.style.color = "white"
    } else{
        body.style.backgroundColor = "white"
        body.style.color = "black"
    }
}