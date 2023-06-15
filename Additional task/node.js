function randomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let res = Math.floor(Math.random() * (max - min) + min);
    console.log(res);
    return res;
}

function promiseRes (result) {
    return new Promise((resolve) => {
        setTimeout(() => {
            result = Math.pow(result, 2);
            console.log(result); 
            resolve(result); 
        }, 3000);
    })
}

new Promise(function(resolve) {

    resolve(randomNum(2, 11));
  
})
    
.then(function(result) {
    return promiseRes(result);
})

.then(function(result) {
    return promiseRes(result);
})