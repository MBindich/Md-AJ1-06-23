const { getRandomNumberAfterTimeout } = require('./functions_to_export')

async function asyncCall() {
    let firstResult = await getRandomNumberAfterTimeout(3000, 1, 5);
    let secondResult = await getRandomNumberAfterTimeout(5000, 6, 10);
    let result = firstResult + secondResult;
    console.log(`final result is ${result}`);
}

asyncCall();