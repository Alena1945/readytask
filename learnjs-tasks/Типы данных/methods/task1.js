// Взгляните на следующий код:

// let str = "Привет";

// str.test = 5;

// alert(str.test);
// Как вы думаете, это сработает? Что выведется на экран?

let str = "Привет";

str.test = 5; // (*)

alert(str.test);

// undefined, тк объект получает свойство test, но после этого он удаляется, и свойства test больше нет.