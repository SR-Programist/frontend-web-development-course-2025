let n = 5;

if(n>0) {
    console.log("condition is true");
}

let m = 4;

if(n!=m) {
    console.log("Condition is True");
}else {
    console.log("Condition is flase");
}

let marks = prompt("Enter Your Marks");
marks = Number(marks);

// if(marks>=90){
//     console.log("Grade: A");
// } else if(marks >=80){
//     console.log("Grade: B");
// } else if(marks >= 70){
//     console.log("Grade: C");
// } else{
//     console.log("Grade: D");
// }

switch(marks){
    case 90:
        console.log("Grade: A");
    break;
    case 80:
        console.log("Grade: B");
    break;
    default:
        console.log("Grade: C");       
}