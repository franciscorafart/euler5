//Euler project problem 5:
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

let f = false
let number = 1

//while loop to go through all the numbers evaluating if they are divisible
while(f==false){

  // evaluate if the number is divisible by all the numbers in the second argument
  f = isDiv(number,20)
  //if the number is divisible
  if (f==true){
    console.log(number) //Show the smalles number that is true. The while loop won't loop again
  } else{// if not number is one and f is still false so the while loop keeps going
    number++
  }
}


//function thqt evaluates if the number n is divisible by all the numbers containes in d. Retunr false if is not divisible by any number
function isDiv(n,d){
  for (let i = 1; i<=d; i++){
    if(n%i != 0){
      return false
    }
  }
  return true
}
