//Function returns array of Fibonacci sequence from specified starting position and specified amount of elements 

function fibonacci (num) {
    if (num <= 1) {
        return 0;
    }

    let nMinus1 = 0;
    let n = 1;
    for (let i = 2; i <= num; i++) {
      let current = nMinus1 + n;
      nMinus1 = n;
      n = current;
    }
    return n;
}

function arrFibonacci (n, m) {
    if (!Number.isInteger(n) || !Number.isInteger(m)) {
        throw new Error(`Parameter is not an integer!`);
    }

    let result = new Array (m);

    for (let i = 0; i < m; i++, n++) {
        result[i] = fibonacci(n);
    }

    return result;
}

console.log(arrFibonacci(1, 10));