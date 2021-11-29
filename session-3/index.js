// This is a comment in JavaScript
// You can see where this file is connected to your HTML in the index.html on line 14
task 1
let a = 5;
const b = 10;
let c = a + b;

console.log(c);

a = 20;

console.log('after a has been update ' + c);

c= a + b;

console.log('after a has been updated with the new a value ' + c);

task 2

function sayHey () {
     console.log("hey"); 
}

function conversation () {
        sayHey();
        console.log("How are you?");
        console.log("Goodbye");
}

conversation();
sayHey();

task 3

function futureAge (name,age) {
    sayHey(name);
    let newAge = age + 5;
    return newAge;
}

console.log(futureAge('Mary',37));

