// **********************************
// function outer() {
//   let a = 10;
//   function inner() {
//     console.log(a);
//   }
//   inner();
// }
// outer();
rfc
// **********************************

for (var i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i*3000);
}

// *********************************

var a = 10;
setTimeout(() => {
  console.log(a);
}, 3000);

// ****************************

for (let i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}

// *********************
var j = 10;
setTimeout(() => {
  console.log(j);
}, 5000);


// exec ssh-agent bash
// ssh-add

console.log("Namaste_JavaScript");

