Thermostat = function(){
  this.temperature = 20;
  this.MINIMUM = 10;
  // this.powerSaver = [true, false]
  this.maximum = 25;
};

Thermostat.prototype.increase = function () {
  this.temperature += 1;
};

Thermostat.prototype.decrease = function () {
  if (this.temperature == this.MINIMUM){
    throw ("Minimum Temperature is 10");
  }
  else {
  this.temperature -= 1;}
};

// Thermostat.prototype.powerSaverOn = function() {
//   this.powerSaver[0]
//   this.maximum = 25
// };
//
// Thermostat.prototype.powerSaverOff = function() {
//   this.powerSaver[1]
//   this.maximum = 32
// };
