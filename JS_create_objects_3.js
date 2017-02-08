function VehicleConstructor(name, wheels, passengers, speed) {
  var self = this;
  this.vin = Math.floor(Math.random() * 100000000)
  this.name = name;
  this.wheels = wheels;
  this.passengers = passengers;
  this.speed = speed;
  var distance_travelled = 0;
  var updateDistance = function(){
    console.log(self.speed)
    distance_travelled += self.speed
  }
  this.move = function(){
    updateDistance()
    this.makeNoise()
  }
  this.checkMiles = function(){
    console.log(distance_travelled)
  }
}

VehicleConstructor.prototype.makeNoise = function(){
  console.log("whrrrrrrrrrrrrrrr")
}

var Bike = new VehicleConstructor('Bike',2,1,60)
Bike.makeNoise = function(){
  alert("ring ring!")
}

var Bus = new VehicleConstructor('Bus', 6, 20, 50)
Bus.addPassengers = function(num){
  this.passengers += num
}

Bus.move()
Bus.move()
Bus.checkMiles()

console.log(Bus.vin)
console.log(Bus.vin)
