const max = Math.max(12, 55, 67, 333);
//console.log(max);
const numbers = [23, 45, 56, 89, 44];
const largest = Math.max(...numbers);
console.log(largest);

const numbers2 = numbers;
numbers.push(55);
console.log(numbers);
console.log(numbers2);

//ek array theke a rk array te gele ... use korte hbe taile numbers dekabe naile string dekabe

const numbers3 = [...numbers];


const numbers4 = [34, 54, ...numbers, 45, 23, 64, 23]
console.log(numbers4);