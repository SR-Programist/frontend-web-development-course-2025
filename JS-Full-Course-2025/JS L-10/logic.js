function welcome(){
    console.log("welcome");
}

welcome();

function sum(num1 , num2){
    return num1 + num2;
}

let n = sum(10 , 20);

let m = (function(n1 , n2){
    return n1 - n2;
})(50 ,25);

let multi = (m1 ,m2) =>{
    return m1 * m2;
}

let ans = multi(10 , 20);