const { CargoPlane } = require('./cargoPlane');
const { PassengerPlane } = require('./PassengerPlane');

class PlaneFactory {
    types = {
        cargo: "CARGO",
        passenger: "PASSENGER"
    }

    createPlane (type, name) {
        switch (type) {
            case "CARGO": return new CargoPlane(name);
            case "PASSENGER": return new PassengerPlane(name);
            default: return null;
        }
    }
}

exports.PlaneFactory = PlaneFactory;