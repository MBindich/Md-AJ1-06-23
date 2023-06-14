//Function returns reversed array

function arrayReverse(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Parameter is not an array!')
    }
    
    return arr.reverse();
}

let array = [1, 2, 3, 4, 5];
console.log(arrayReverse(array));