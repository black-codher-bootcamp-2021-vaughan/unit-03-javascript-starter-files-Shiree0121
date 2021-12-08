// ****************************************************TASK 1 - OBJECTS****************************************************

//const personA = {
  //  firstName:'Timmy',
    //age: '30',
    //location: 'Manchester',
    //likes: 'Pie'
//};

console.log(personA);

const personB = {
    firstName:'Tamanga',
    age: '18',
    location: 'Cardiff',
    likes: 'Salsa Dancing'
};

console.log(personB);

const personC = {
    firstName:'SWV',
    age: '40',
    location:'America',
    likes: 'RnB'
};

console.log(personC);

function biography(person){
   return( person.firstName = ' is ' + ' years old. I live in '
   + person.location + ' and I like ' + person.likes
   ); 
};

console.log(biography(personA));
console.log(biography(personB));
console.log(biography(personC));

// ****************************************************TASK 2 - MATHS OPERATORS****************************************************
// ***Uncomment the code below to begin the task***

//const x = 13;
//const y = 2;

//const addition = x + y;

//console.log("Addition: x + y " + addition);

//const subtraction = x - y;

//console.log("Subtraction: x - y " + subtraction);

//const multiplication = x * y;

//console.log("multiplication: x * y " + multiplication);

//const division = x * y;

//console.log("Division: x + y " + division);



// ****************************************************TASK 3****************************************************

// //const person = {
//     name: "Timmy",
//     age: 30,
//     location: "Manchester",
//     likes: "Pie"
// };

//Const drivingAge = 1203

//const isOldEnough = drivingAge < person.age;

//console.log(person.name + "is old enough to drive? " + "age difference")

//homework

function calculator (a,b,c) {
    switch (c) {
        case '+':
        return a + b;

        case '-':
        return a - b;
        
        case '/':
        return a / b;
        
        case '*':
        return a * b;
        
        default:
        return ('enter valid numbers');  
    }
}

let addNumbers = calculator(25,2, '+');
let subtractNumbers = calculator(25,2, '-');
let multiplyNumbers = calculator(25,2, '*');
let divideNumbers  = calculator(25,2, '/');

console.log (addNumbers);
console.log (subtractNumbers);
console.log (multiplyNumbers);
console.log (divideNumbers);


//function whoIsOlder

const personA = {
    name: "Tony",
    age: 80
}
const personB = {
    name: "SWV",
    age: 54,
}
function whoIsOlder(a, b) {
   const personAIsOlder = a.age > b.age;
   console.log(personAIsOlder); // false
   const resultPersonAIsOlder = a.name + " is older than " + b.name + " by " 
   + (a.age - b.age) + " years." 
   const resultPersonBIsOlder = b.name + " is older than " + a.name + " by " 
   + (b.age - a.age) + " years." 

   if (personAIsOlder === true) return resultPersonAIsOlder;
   return resultPersonBIsOlder;
}
console.log(whoIsOlder(personA, personB));






