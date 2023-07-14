class Plane {
    constructor(name, maker, productionDate, runtime, sizeType, fuelTankSize, fuelConsumption, topSpeed, amountOfEngines, requiredStaff) {
        this.name = name, //String
        this.maker = maker, //String
        this.productionDate = productionDate, //Date object
        this.runtime = runtime, //Int, in hours
        this.sizeType = sizeType, //Int, 1 2 or 3, where 1 is largest and 3 is smallest
        this.fuelTankSize = fuelTankSize, //Int, liters
        this.fuelConsumption = fuelConsumption, //Int, liters per minute
        this.topSpeed = topSpeed, //Int, kilometers per hour
        this.amountOfEngines = amountOfEngines, //Int
        this.requiredStaff = requiredStaff //Int, amount of staff for plane to lift off 
        this.flyingRange = this.findFlyingRange(topSpeed, fuelConsumption, fuelTankSize)
    }

    findFlyingRange (topSpeed, fuelConsumption, fuelTankSize) {
        let flyingRange = (fuelTankSize / (fuelConsumption * 60)) * topSpeed;
        return flyingRange;
    }
}

exports.Plane = Plane;