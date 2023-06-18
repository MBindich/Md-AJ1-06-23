function randomNum(min, max) {
    min = Math.ceil(min);
    max = Math.ceil(max);
    let res = Math.floor(Math.random() * (max - min) + min);
    console.log(`Random num returns ${res}`);
    return res;
}

function getNum (timeout, min, max) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve (randomNum(min, max));
        }, timeout);
    })
}

async function asyncCall() {
    let firstResult = await getNum(3000, 1, 5);
    let secondResult = await getNum(5000, 6, 10);
    let result = firstResult + secondResult;
    console.log(`final result is ${result}`);
}

asyncCall();