const { CargoPlane } = require('./cargoPlane');
const { PassengerPlane } = require('./PassengerPlane');

class PlaneFactory {
    types = {
        cargo: "CARGO",
        passenger: "PASSENGER"
    }

    createPlane(type, name) {
        switch (type) {
            case this.types.cargo: return new CargoPlane(name);
            case this.types.passenger: return new PassengerPlane(name);
            default: return null;
        }
    }
}

exports.PlaneFactory = PlaneFactory;