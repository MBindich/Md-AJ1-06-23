let inputNumber = 200;
let currIntNum = inputNumber;
let currFloatNum = inputNumber;
let amountOfParts = 4;
let intPartsArr = [];
let floatPartsNum = [];

for (let i = 0; i < amountOfParts - 1; i++) {
    intPartsArr[i] = currIntNum - Math.floor(Math.random() * currIntNum);
    currIntNum -= intPartsArr[i];
}
if (currIntNum !== 0){
    intPartsArr[intPartsArr.length] = currIntNum;
}

console.log(intPartsArr);

for (let i = 0; i < amountOfParts - 1; i++) {
    floatPartsNum[i] = Number((currFloatNum - (Math.random() * currFloatNum)).toFixed(2));
    currFloatNum -= Number(floatPartsNum[i].toFixed(2)) * 10 / 10;
}
if (currFloatNum !== 0){
    floatPartsNum[floatPartsNum.length] = Number(currFloatNum.toFixed(2)); 
}

console.log(floatPartsNum);