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