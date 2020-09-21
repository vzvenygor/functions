// 1. Напишіть функцію, що повертає куб числа.

let cube = (a) => a * a * a;
console.log(cube(4));

// 2. Напишіть функцію, що додає перше число до другого і ділить результат на третє число.

let mathAction = (b, c, d) => (b + c) / d;
console.log(mathAction(10, 10, 2));

// 3. Напишіть функцію, що приймає число від 1 до 7 і повертає відповідну назву дня (українською).
let arrNum = [1, 2, 3, 4, 5, 6, 7];
let day = (arrNum) => {
  switch (arrNum) {
    case 1:
      return('понеділок');
    case 2:
      return('вівторок');
    case 3:
      return('середа');
    case 4:
      return('четвер');
    case 5:
      return('п`ятниця');
    case 6:
      return('субота');
    case 7:
      return('неділя');
    default:
      return('Нема такого дня!');
  }
};
console.log(day(3));


// 4. Реалізуйте функцію знаходження факторіала

let factorial = (n) => (n != 1) ? n * factorial(n - 1) : 1;
console.log(factorial(10));

// 5.  Напишіть функцію яка отримує години хвилини та секунди і повертає це число в секундах.

let time = (x, y, z) => {
  const SEC_IN_HOUR = 3600;
  const SEC_IN_MIN = 60;
  z = (y * SEC_IN_MIN) + (x * SEC_IN_HOUR) + z;
  return z;
};
console.log(time(1, 20, 46));

// 6.    Написати функцію , яка приймає секунди, і перетворює їх у години хвилини та секунди у форматі «гг:хх:сс». якщо кількість годин більша за 23.59.59 - вивести повідомлення "Більше одного дня". 

let convertSec = (sec) => {
  if (sec <= 86399) {
    hours = Math.floor(sec / (60 * 60));
    if (hours < 10) {
      hours = '0' + hours;
    };

    let divisorForMin = sec % (60 * 60);
    min = Math.floor(divisorForMin / 60);
    if (min < 10) {
      min = '0' + min;
    };

    let divisorForSec = divisorForMin % 60;
    sec = Math.ceil(divisorForSec);
    if (sec < 10) {
      sec = '0' + sec;
    };
    
    console.log(hours+':'+min+':'+sec);
  } else {
    console.log('Більше одного дня');
  };
};
convertSec(4846);

// 7. 4 відмінності ерров фанкшина від звичайної функції.
// 1 - коротший варіант запису у порівнянні із звичайною функцією
// 2 - Якщо Arrow function приймає 1 аргумент, то аргумент можна не брати в лапки.
// 3 - В Arrow function нема this. this обробляється як змінна.
// 4 - Arrow function не мають свого контексту і можуть використовуватися для передачі в інші функції.