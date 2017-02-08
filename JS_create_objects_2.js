function VehicleConstructor(name, wheels, passengers, speed) {
  var self = this;
  this.name = name;
  this.wheels = wheels;
  this.passengers = passengers;
  this.speed = speed;
  this.distance_travelled = 0;

  this.updateDistance = function(){
    this.distance_travelled += this.speed
  }
  this.makeNoise = function(){
    console.log("whrrrrrrrrrrrrrrr")
  }
  this.move = function(){
    this.updateDistance()
    this.makeNoise()
  }
  this.checkMiles = function(){
    console.log(this.distance_travelled)
  }
}

var Bike = new VehicleConstructor('Bike',2,1,60)
Bike.makeNoise = function(){
  alert("ring ring!")
}

var Sedan = new VehicleConstructor('Sedan',4,4,60)
Sedan.makeNoise = function(){
  alert("Honk Honk!")
}

var Bus = new VehicleConstructor('Bus', 6, 20, 50)
Bus.addPassengers = function(num){
  this.passengers += num
}

Bus.move()
Bus.checkMiles()
