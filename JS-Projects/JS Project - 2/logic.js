let btn = document.getElementById("btn");
let pass = document.querySelector(".pass");

let showPass =()=>{
    if(btn.value == "Show" && pass.value == ""){
        alert("First Enter Your Password")
    }
    else if( btn.value == "Show"){
        pass.type = "text"
        btn.value = "Hide"
    } else{
        pass.type = "Password"
        btn.value = "Show"
    }
}