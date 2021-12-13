// ****************************************************TASK 1****************************************************

// const animals = ['cat' , 'dog' , 'wolf' , 'lion' , 'eagle' , 'zebra' ];

// for (let index = 0; index < animals.length; index++) 

// animals.pop();
// animals.unshift( 'cow' );
// animals.push( 'bird' );

// console.log(animals );


// ****************************************************TASK 2****************************************************

//(task 2 part 1)

const animals = ['cat' , 'dog' , 'wolf' , 'lion' , 'eagle' , 'zebra' ];

animals.sort().reverse();

console.log(animals );                // //has reversed the animal names 

//(task 2 part 2)

const names = ['bonny' , 'chan' , 'swv' , 'monika' , 'mel' , 'timmy' , 'tyrone' , 'zebrae' , 'samatha' , 'carrie' ];

names.sort();
names.reverse();

console.log(names );

//Extra Task

const numbers = ['5' , '325' , '67' , '100000' , '150'];

numbers.sort((a,b) => a - b);      //use that fomular then b-a for decending order 

console.log(numbers);


// ****************************************************TASK 3****************************************************

// Notice the backticks enclosing t'challa. Read https://www.javascripttutorial.net/es6/javascript-template-literals/ for an explanation on template literals
const people = [
  { name: `t'challa`, age: 37 },
  { name: 'shuri', age: 16 },
  { name: 'killmonger', age: 32 },
];

// This is a helper function that should be used in the final task of the session.
// You should pass this function to the sort method to sort the ages of each individiual in the people array of objects
// Note: this helper function is using a tertiary operator instead of an if/else statement
function compare(a, b) {
  const personA = a.age;
  const personB = b.age;
  console.log(a,b)
  console.log(personA > personB ? true : false);
  return 
}
console.log(people.sort((a,b) => compare(a,b)).map (item => item.name))