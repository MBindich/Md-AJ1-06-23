const { Plane } = require('./plane');

class PassengerPlane extends Plane {
    constructor(name, maker = `Boeing`, productionDate = new Date('December 17, 1995'), runtime = 30000, sizeType = 2, fuelTankSize = 24000, fuelConsumption = 45, topSpeed = 800, amountOfEngines = 2, requiredStaff = 10, maxPassengers = 150, comfortClass = 3) {
        super(name, maker, productionDate, runtime, sizeType, fuelTankSize, fuelConsumption, topSpeed, amountOfEngines, requiredStaff),
        this.maxPassengers = maxPassengers, //Int
        this.comfortClass = comfortClass //Int, where 1 is best and 3 is worst
    }
}

exports.PassengerPlane = PassengerPlane;