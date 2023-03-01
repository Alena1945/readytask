// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// Примеры:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.

function camelize(str) {
    let arr = str.split('');
    let index;
    do {
      index = arr.findIndex((arg) => arg === '-');
      delete arr[index];
      if (index < arr.length - 1 && index >= 0) {
        arr[index + 1] = arr[index + 1].toUpperCase();
      }
    }
    while (index !== -1);
    let result = arr.join('');
    return result;
}