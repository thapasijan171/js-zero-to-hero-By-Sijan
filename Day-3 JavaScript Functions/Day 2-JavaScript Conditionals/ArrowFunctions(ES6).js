// With two arguments

const sum = (param1, param2) => { 
  return param1 + param2; 
}; 
console.log(sum(2,5)); // => 7 


// With no arguments

const printHello = () => { 
  console.log('hello'); 
}; 
printHello(); // => hello



// With a single argument

const checkWeight = weight => { 
  console.log(`Weight : ${weight}`); 
}; 
checkWeight(25); // => Weight : 25 



// Concise arrow functions

function add(num1, num2) {
  return num1 + num2;
}

