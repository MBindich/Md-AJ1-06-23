let simpleString = "This is my simple string";
let simpleNumber = 69420;
let simpleBool = true;

console.log(simpleString + simpleBool);
console.log(simpleString + simpleNumber);
console.log(simpleNumber + simpleBool);
console.log('\n');

console.log(simpleString * simpleBool);
console.log(simpleString * simpleNumber);
console.log(simpleNumber * simpleBool);
console.log('\n');

console.log(simpleString / simpleBool)
console.log(simpleString / simpleNumber);
console.log(simpleNumber / simpleBool);
console.log('\n');

console.log(simpleString = Number(simpleString));
console.log(simpleString = Boolean(simpleString));
console.log(simpleNumber = String(simpleNumber));
console.log(simpleNumber = Boolean(simpleNumber));
console.log(simpleBool = String(simpleNumber));
console.log(simpleBool = Number(simpleNumber));