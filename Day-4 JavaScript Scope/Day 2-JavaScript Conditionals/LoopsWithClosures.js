// Prints 3 thrice, not what we meant.
for (var i = 0; i < 3; i++) {
  setTimeout(_ => console.log(i), 10);
}

// --------------------------------

// Prints 0, 1 and 2, as expected.
for (let j = 0; j < 3; j++) { 
  setTimeout(_ => console.log(j), 10);
}


// The variable has its own copy using let, and the variable has shared copy using var.

