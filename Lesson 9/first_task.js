function randomNum(min, max) {
    min = Math.ceil(min);
    max = Math.ceil(max);
    let res = Math.floor(Math.random() * (max - min) + min);
    console.log(`Random num returns ${res}`);
    return res;
}

let firstPromise = new Promise (function(resolve) {
    let firstTimeout = randomNum(1, 5);
    setTimeout (resolve, firstTimeout * 1000, 1);
})

let secondPromise = new Promise (function(resolve) {
    let secondTimeout = randomNum(1, 5);
    setTimeout (resolve, secondTimeout * 1000, 2);
})

let thirdPromise = new Promise (function(resolve) {
    let secondTimeout = randomNum(1, 5);
    setTimeout (resolve, secondTimeout * 1000, 3);
})

Promise.race([firstPromise, secondPromise, thirdPromise]).then(function(value) {
    console.log(`First finished is ${value}`);
})