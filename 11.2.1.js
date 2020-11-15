function evenOrOdd(){
  value = prompt('Введи значение')
num = +value
console.log(typeof num)
if (isNaN(num)) {
  alert('Это не число')
} else {
  if (num % 2 === 0){
  alert('Это четное число')
  } else {
  alert('Это нечетное число')
  }
}
}
evenOrOdd();

// Задание выполнено неверно. Нужно было оформить в виде функции задание 7 с предыдущего модуля (то, где нужно было посчитать кол-во четных, нечетных элементов и нулей в массиве). Ниже написала верное решение.

function countEvenOdd(arr) {
  let even = 0, odd = 0, zero = 0;

  for(let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
          if (arr[i] === 0) {
              zero++;
          } else if (arr[i] % 2 === 0) {
              even++;
          } else {
              odd++;
          }
      }
  }

  console.log(`Четных элементов - ${even}`);
  console.log(`Нечетных элементов - ${odd}`);
  console.log(`Нулей - ${zero}`);
}

let array = [5, 8, 13, 21, 0, 0, null, NaN, undefined, '48', true, false];

countEvenOdd(array);