let startDate = new Date(2000, 0, 1);
startDate.setDate(13);
let currentDate = new Date();
currentDate.setTime(Date.now());
let counter = 0;

while (startDate < currentDate) {
    if (startDate.getDay() === 5) {
        counter++;
    }
    startDate.setMonth(startDate.getMonth() + 1);
}

console.log("The number of Friday the 13th is %d", counter);