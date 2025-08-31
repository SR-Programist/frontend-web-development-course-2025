let btn = document.querySelector(".btn");
let timer = document.querySelector(".timer h1");
let time = 0;
let intervel ;

function formate(second){
    let hr = Math.floor(second/3600)
    let min = Math.floor((second % 3600)/ 60)
    let sec = Math.floor(second % 60)

    return `${hr.toString().padStart(2 , "0")}.${min.toString().padStart(2 , "0")}.${sec.toString().padStart(2 , "0")}`
}

function startTimer(){
    if(btn.innerText === "Start Timer"){
        intervel = setInterval(()=>{
            time++;
            timer.innerText = formate(time);
        }, 1000)
        btn.innerText = "Stop Timer";
    }else{
        clearInterval(intervel)
        btn.innerText = "Start Timer";
    }
}

btn.addEventListener("click", startTimer);
