function primeNumber(){
  let value = prompt('Input number')
  let num = +value
  let attribute = true
  if (isNaN(num)) {
    alert('Not a number')
  } else {
    if (num > 1000) {
      alert("It's too big")
    } else {
      if (num % 2 === 0 || num === 1 || num === 0) {
        alert("It's not a prime number")
      } else {
        if (num === 2) {
          alert("It's a prime number")
        } else {
           for (i = 3; i < num; i++) {
            if (num % i === 0) {
              alert("It's not a prime number")
              attribute = false
              break;
            } 
          }
        }
        if (attribute === true) {
      alert("It's a prime number")
    }
      }
    }
  }
}
primeNumber();
