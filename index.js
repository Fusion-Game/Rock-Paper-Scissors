function {
  // 1. Generate a random decimal number between 0 (inclusive) and 3 (exclusive)
const randomNumber = Math.random() * 3;

// 2. Round the decimal number down to the nearest integer to get a whole number between 0 and 2
const randomInt = Math.floor(randomNumber);

// 3. Add 1 to the integer to get a number between 1 and 3
const randomNumber1to3 = randomInt + 1;

// 4. Output the random number to the console
console.log(randomNumber1to3);

}
