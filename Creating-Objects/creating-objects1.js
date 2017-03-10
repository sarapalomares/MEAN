function VehicleConstructor (name, wheels, passengerNumber){
      var vehicle = {};

      vehicle.name = name;
      vehicle.wheels = wheels;
      vehicle.passengerNumber = passengerNumber;

      vehicle.makeNoise = function(noise){
            var noise = noise;
            console.log(noise);
      }
      return vehicle;
}

var bike = VehicleConstructor("My Bike", 2, 1);
bike.makeNoise = function (){
      console.log("Ring, Ring!")
}

var sedan = VehicleConstructor("Meg", 4, 2);
sedan.makeNoise = function (){
      console.log("Honk-Honk!")
}

var bus = VehicleConstructor("Bus", 4, 12);
bus.pickUp = function (newPassengers){
      bus.passengerNumber += newPassengers;
}

console.log(bus.passengerNumber);
bus.pickUp(6);
console.log(bus.passengerNumber);
