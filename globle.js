// //global scioping
// console.log(a);
// var a = 20;

// function show() {
//   //local scope
//   var er;
//   var er = 67;
// }

// function s() {
//   console.log(a);
// }
// s();

// //what is  lexical   scoping of variabbles
// //ans. use any global varibbales inside any local scope then the scope of variables is lexical scoping of variables

// //variables hoisting
// //let const no
// //var yes

function add() {
  let a = 56;
  let b = 45;
  window.alert(a + b);
}
add();

function sub(a, b) {
  window.alert(a - b);
}
sub(56, 45);
