function VehicleConstructor(name, wheels, passengers) {
  var vehicle = {};

  vehicle.name = name;
  vehicle.wheels = wheels;
  vehicle.passengers = passengers;

  vehicle.makeNoise = function(){
    alert("whrrrrrrrrrrrrrrr")
  }

  return vehicle;
}

var Bike = VehicleConstructor('Bike',2,1)
Bike.makeNoise = function(){
  alert("ring ring!")
}

var Sedan = VehicleConstructor('Sedan',4,4)
Sedan.makeNoise = function(){
  alert("Honk Honk!")
}

var Bus = VehicleConstructor('Bus', 6, 20)
Bus.addPassengers = function(num){
  this.passengers += num
}
