const { Airline } = require('./airline');

let myAirline = new Airline("TMP");
myAirline.addPlane(`TMP001`, myAirline.parameters.cargoPlane);
myAirline.addPlane(`TMP002`, myAirline.parameters.passengerPlane);
myAirline.addPlane(`TMP003`, myAirline.parameters.cargoPlane);
myAirline.planes[2].loadCapasity += 2000;
myAirline.planes[2].fuelConsumption -= 100;
myAirline.planes[2].topSpeed -= 150;
myAirline.addPlane(`TMP004`, myAirline.parameters.passengerPlane);
myAirline.planes[3].maxPassengers -= 40;
myAirline.planes[3].fuelTankSize += 4000;
myAirline.addPlane(`TMP005`, myAirline.parameters.cargoPlane);
myAirline.planes[4].fuelConsumption += 300;
myAirline.planes[4].topSpeed += 400;

console.log(`Planes sorted by range: \n${JSON.stringify(myAirline.sortByParam(myAirline.parameters.range))}\n\n`);
console.log(`Planes sorted by cargo: \n${JSON.stringify(myAirline.sortByParam(myAirline.parameters.cargo))}\n\n`);

console.log(`Overall cargo capasity: \n${myAirline.overallCargo()}\n\n`);
console.log(`Overall passengers capasity: \n${myAirline.overallPassengers()}\n\n`);

console.log(`Found by parameters: \n${JSON.stringify(myAirline.findByParam(null, 200, 1000, 7000, 7500))}`);