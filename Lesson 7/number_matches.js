//Function returns array of two numbers: amount of full matches between positions and values of symbols in two numbers
//and amount of equal symbols in numbers

function matches (firstNum, secondNum) {
    let firstArr = Array.from(String(firstNum));
    let SecondArr = Array.from(String(secondNum));

    let fullMatches = 0, valueMatches = 0;
    for (let i = 0; i < firstArr.length; i++) {
        let indexOfReturnValue = SecondArr.indexOf(firstArr[i]); 
        if (indexOfReturnValue === -1) {
            continue;
        } else if (indexOfReturnValue === i) {
            fullMatches++;
            valueMatches++;
        } else {
            valueMatches++;
        }
    }
    return Array(fullMatches, valueMatches);
}

console.log(matches(1234, 3456));