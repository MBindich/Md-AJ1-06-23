function randomNum(min, max) {
    min = Math.ceil(min);
    max = Math.ceil(max);
    let res = Math.floor(Math.random() * (max - min) + min);
    console.log(`Random num returns ${res}`);
    return res;
}

function getNum (timeout) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve (randomNum(1, 5));
        }, timeout);
    })
}

async function asyncCall() {
    let result = await getNum(3000);
    result = Math.pow(result, 2);
    console.log (`final result is ${result}`);
}

asyncCall();