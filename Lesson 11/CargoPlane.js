const { Plane } = require('./plane');

class CargoPlane extends Plane {
    constructor(name, maker = `IL`, productionDate = new Date('December 1, 1980'), runtime = 300000, sizeType = 2, fuelTankSize = 110000, fuelConsumption = 150, topSpeed = 800, amountOfEngines = 4, requiredStaff = 4, loadCapasity = 60000, capableOfDangerousCargo = true) {
        super(name, maker, productionDate, runtime, sizeType, fuelTankSize, fuelConsumption, topSpeed, amountOfEngines, requiredStaff),
        this.loadCapasity = loadCapasity, //Int in kg
        this.capableOfDangerousCargo = capableOfDangerousCargo //Bool 
    }
}

exports.CargoPlane = CargoPlane;