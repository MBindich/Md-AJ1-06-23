function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.ceil(max);
    let res = Math.floor(Math.random() * (max - min) + min);
    console.log(`Random num returns ${res}`);
    return res;
}

function getRandomNumberAfterTimeout (timeout, min = 1, max = 5) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve (getRandomNum(min, max));
        }, timeout);
    })
}

function getTimeoutPromise (timeout = -1, promiseIndex = 0, min = 1, max = 5) {
    if (timeout = -1){
        return new Promise (function(resolve) {
            timeout = getRandomNum(min, max);
            setTimeout (resolve, timeout * 1000, promiseIndex);
        })    
    }
    else if (timeout >= 0) {
        return new Promise (function(resolve) {
            setTimeout (resolve, timeout, promiseIndex);
        })
    }
    else {
        throw new Error("Wrong timeout!");
    }
}

exports.getRandomNum = getRandomNum;
exports.getTimeoutPromise = getTimeoutPromise;
exports.getRandomNumberAfterTimeout = getRandomNumberAfterTimeout;