const { PlaneFactory } = require('./PlaneFactory');

class Airline {
    constructor (name){
        this.name = name;
    }
    
    planes = [];
    addPlane(name, type) {
        this.planes += new PlaneFactory(name, type);
    }
    removePlane() {

    }
    findBySpeed() {

    }
    findByRange() {
        
    }
    findByCargo() {

    }
    findByPassengers() {

    }

    param = {
        speed: "SPEED",
        range: "RANGE",
        cargo: "CARGO",
        passengers: "PASSENGERS"
    }
    sortByParam() {

    }
    findByParam() {

    }
    overallCargo() {

    }
    overallPassengers() {

    }
}