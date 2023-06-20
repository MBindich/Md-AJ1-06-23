// Function returns sorted array in ascending or descending order, specified by 'typeOfSort' parameter

function ascendNum (a, b) {
    return a - b;
}

function sorter (typeOfSort, array) {
    switch (typeOfSort) {
        case `ascend numbers`:
            array.sort(ascendNum);
            return array;
        case `descend numbers`:
            array.sort(ascendNum).reverse();
            return array;
        case `ascend strings`:
            array.sort();
            return array;
        case `descend strings`:
            array.sort().reverse();
            return array;
        default: throw new Error("Something went wrong!");
    }
}

let arr = ["Brandon", "Alex","Linus", "Jake"]
console.log(sorter(`descend strings`, arr));
arr = [1, 2, -20, 50, 4, 1]
console.log(sorter(`descend numbers`, arr));