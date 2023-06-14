console.log ("hello world")
console.log ("hello world")
console.log ("hello world")


function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const min = 1;
const max = 10;
const randomNumber = getRandomNumber(min, max);
console.log(randomNumber);

console.log ("printed random number")

