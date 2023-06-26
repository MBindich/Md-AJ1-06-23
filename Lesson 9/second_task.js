const { getRandomNumberAfterTimeout } = require('./functions_to_export')

async function asyncCall() {
    let result = await getRandomNumberAfterTimeout(3000);
    result = Math.pow(result, 2);
    console.log (`final result is ${result}`);
}

asyncCall();