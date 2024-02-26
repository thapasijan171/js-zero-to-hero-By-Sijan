for (let i = 0; i < 3; i++) {
  // This is the Max Scope for 'let'
  // i accessible ✔️
}
// i not accessible ❌

// ----------------------

for (var i = 0; i < 3; i++) {
  // i accessible ✔️
}
// i accessible ✔️


// var is scoped to the nearest function block, and let is scoped to the nearest enclosing block.

