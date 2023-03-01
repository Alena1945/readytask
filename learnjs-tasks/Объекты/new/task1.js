// Возможно ли создать функции A и B, чтобы new A() == new B()?

// function A() { ... }
// function B() { ... }

// let a = new A();
// let b = new B();

// alert( a == b ); // true
// Если да – приведите пример вашего кода.

//да, возможно

let age = {};

function Myself() { return age; }
function Sister() { return age; }

alert( new Myself() == new Sister() );