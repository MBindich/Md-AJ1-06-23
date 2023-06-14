//Fuction returns the maximum value of the array

function arrMaxValue (arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Parameter is not an array!')
    }

    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > result) {
            result = arr[i];
        }
    }

    return result;
}

let array = [1, 2, 3, 4, 5, -3, 0];
console.log(arrMaxValue(array));