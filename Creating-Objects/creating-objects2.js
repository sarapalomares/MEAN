function VehicleConstructor (name, wheels, passengerNumber, speed){
      //PRIVATE
      var self = this;
      var distance_traveled = 0;
      function updateDistanceTraveled(){
            distance_traveled += self.speed;
            console.log(distance_traveled);
      }

      //PUBLIC
      this.name = name;
      this.wheels = wheels;
      this.passengerNumber = passengerNumber;
      this.speed = speed;
      this.makeNoise = function(noise){
            var noise = noise;
            console.log(noise);
      }
      this.move = function(){
            updateDistanceTraveled();
            this.makeNoise();
      }
      this.checkMiles = function(){
            console.log(distance_traveled);
      }
}
