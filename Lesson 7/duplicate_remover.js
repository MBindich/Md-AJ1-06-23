//Function removes all duplicates from array

function duplicateRemover (arr) {
    arr = [...new Set(arr)];
    return arr;
}

let arr = [1, 2, 2, 5, 3, 2, 5]
console.log(duplicateRemover(arr));