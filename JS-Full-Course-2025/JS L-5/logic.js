let ary = ["apple", "Banana", "orange"];
ary[1] = "lichi";

let newAry = ary.toString();
console.log(newAry);

let includes = ary.includes("apple");
console.log(includes);

let num = [1,2,3,4,5];
let newNum = num.concat(ary);

ary.push(100);
console.log(ary);

ary.unshift("start");

ary.pop();
console.log(ary);

ary.shift();
console.log(ary);

// num.splice(2,1,30,33);
// console.log(num);

let slice = num.slice(2,5);
console.log(slice);

let food = ["apple", "banana", [1,2,3,4,5]];

let flat = food.flat();
console.log(flat);