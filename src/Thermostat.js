Thermostat = function(){
  this.temperature = 20;
  this.MINIMUM = 10;
  this.powerSaver = true;
  this.maximum = 25;
};

Thermostat.prototype.increase = function () {
  if(this.powerSaver == true && this.temperature == 25) {
    throw ("Power Saver is on - Maximum Temperature is 25");
  } else if(this.powerSaver == false && this.temperature == 32) {
    throw ("Maximum Temperature is 32");
  } else {
    this.temperature += 1;
  }
};

Thermostat.prototype.decrease = function () {
  if (this.temperature == this.MINIMUM){
    throw ("Minimum Temperature is 10");
  }
  else {
  this.temperature -= 1;}
};

Thermostat.prototype.powerSaverOn = function() {
  this.powerSaver = true;
  this.maximum = 25;
};

Thermostat.prototype.powerSaverOff = function() {
  this.powerSaver = false;
  this.maximum = 32;
};
