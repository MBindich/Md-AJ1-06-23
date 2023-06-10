let firstPersonScore = 0, secondPersonScore = 0;
    
for (let i = 0; i < 3; i++) {
    firstPersonScore += Math.floor(Math.random() * 6);
}
for (let i = 0; i < 3; i++) {
    secondPersonScore += Math.floor(Math.random() * 6);
}

console.log("Frist person' score is %d\nSecond person' score is %d", firstPersonScore, secondPersonScore);
if (firstPersonScore > secondPersonScore) {
    console.log("First person wins!");
} else if (secondPersonScore > firstPersonScore) {
    console.log("Second person wins!");
} else {
    console.log("Draw!");
}