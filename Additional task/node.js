function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let res = Math.floor(Math.random() * (max - min) + min);
    console.log(res);
    return res;
}

function getTimeoutSquareNum (result) {
    return new Promise((resolve) => {
        setTimeout(() => {
            result = Math.pow(result, 2);
            console.log(result); 
            resolve(result); 
        }, 3000);
    })
}

new Promise(function(resolve) {

    resolve(getRandomNum(2, 11));
  
})
    
.then(function(result) {
    return getTimeoutSquareNum(result);
})

.then(function(result) {
    return getTimeoutSquareNum(result);
})