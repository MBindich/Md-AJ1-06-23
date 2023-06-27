const { getTimeoutPromise } = require('./functions_to_export')

let firstPromise = getTimeoutPromise(-1, 1);
let secondPromise = getTimeoutPromise(-1, 2);
let thirdPromise = getTimeoutPromise(-1, 3);

Promise.race([firstPromise, secondPromise, thirdPromise]).then(function(value) {
    console.log(`First finished is ${value}`);
})