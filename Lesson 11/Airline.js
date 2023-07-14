const { PlaneFactory } = require('./PlaneFactory');
const factory = new PlaneFactory;

class Airline {
    constructor(name) {
        this.name = name;
    }

    parameters = {
        name: "NAME",
        speed: "SPEED",
        range: "RANGE",
        cargo: "CARGO",
        passengers: "PASSENGERS",
        cargoPlane: factory.types.cargo,
        passengerPlane: factory.types.passenger
    }

    planes = [];
    addPlane(name, type) {
        this.planes.push(factory.createPlane(type, name));
        return this.planes;
    }
    removePlane(name) {
        let index = this.planes.indexOf(plane => plane.name === name);
        if (index > -1) {
            this.planes.splice(index, 1);
            return this.planes;
        }
        else {
            return null;
        }
    }
    findByName(name, array) {
        let match = array.find(plane => plane.name === name);
        return match;
    }
    findBySpeed(min, max, array) {
        let result = [];
        if (min && max) {
            result = array.filter(plane => plane.topSpeed >= min);
            result = array.filter(plane => plane.topSpeed <= max);
        }
        return result;
    }
    findByFlightRange(min, max, array) {
        let result = [];
        if (min && max) {
            result = array.filter(plane => plane.flyingRange >= min);
            result = array.filter(plane => plane.flyingRange <= max);
        }
        return result;
    }
    findByCargo(min, max, array) {
        let result = [];
        if (min && max) {
            result = array.filter(plane => plane.loadCapasity >= min);
            result = array.filter(plane => plane.loadCapasity <= max);
        }
        return result;
    }
    findByPassengers(min, max, array) {
        let result = [];
        if (min && max) {
            result = array.filter(plane => plane.maxPassengers >= min);
            result = array.filter(plane => plane.maxPassengers <= max);
        }
        return result;
    }
    sortByParam(param) {
        switch (param) {
            case this.parameters.name: {
                this.planes.sort((a, b) => {
                    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
                    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }

                    // names must be equal
                    return 0;
                })
                return this.planes;
            }
            case this.parameters.speed: {
                this.planes.sort((a, b) => a.topSpeed - b.topSpeed);
                return this.planes;;
            }
            case this.parameters.range: {
                this.planes.sort((a, b) => a.flyingRange - b.flyingRange);
                return this.planes;;
            }
            case this.parameters.cargo: {
                this.planes.sort((a, b) => a.loadCapasity - b.loadCapasity);
                return this.planes;;
            }
            case this.parameters.passengers: {
                this.planes.sort((a, b) => a.maxPassengers - b.maxPassengers);
                return this.planes;;
            }
            default: return null;
        }
    }
    findByParam(name, minSpeed, maxSpeed, minRange, maxRange, minCargo, maxCargo, minPassengers, maxPassengers) {
        let searchResult = this.planes;
        if (name) {
            searchResult = this.findByName(name, searchResult);
        }
        if (minSpeed && maxSpeed) {
            searchResult = this.findBySpeed(minSpeed, maxSpeed, searchResult);
        }
        if (minRange && maxRange) {
            searchResult = this.findByFlightRange(minRange, maxRange, searchResult);
        }
        if (minCargo && maxCargo) {
            searchResult = this.findByCargo(minCargo, maxCargo, searchResult);
        }
        if (minPassengers && maxPassengers) {
            searchResult = this.findByPassengers(minPassengers, maxPassengers, searchResult);
        }
        return searchResult;
    }
    overallCargo() {
        return this.planes.reduce((accumulator, currentValue) => currentValue.loadCapasity ? accumulator + currentValue.loadCapasity : accumulator, 0);
    }
    overallPassengers() {
        return this.planes.reduce((accumulator, currentValue) => currentValue.maxPassengers ? accumulator + currentValue.maxPassengers : accumulator, 0);
    }
}

exports.Airline = Airline;