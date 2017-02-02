'use strict';

var Thermostat = function(){
  this.temperature = 20;
  this.MINIMUM = 10;
  this.POWERSAVING_ON_MAXIMUM = 25;
  this.POWERSAVING_OFF_MAXIMUM = 32;
  this.powerSaver = true;
  this.maximum = this.POWERSAVING_ON_MAXIMUM;
};

Thermostat.prototype.increase = function () {
  if(this.powerSaver == true && this.temperature == this.POWERSAVING_ON_MAXIMUM) {
    throw ("Power Saver is on - Maximum Temperature is 25");
  } else if(this.powerSaver == false && this.temperature == this.POWERSAVING_OFF_MAXIMUM) {
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
  this.maximum = this.POWERSAVING_ON_MAXIMUM;
};

Thermostat.prototype.powerSaverOff = function() {
  this.powerSaver = false;
  this.maximum = this.POWERSAVING_OFF_MAXIMUM;
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
};

Thermostat.prototype.energyUsage = function(){
  if(this.temperature < 18) {
    return "low-usage"}
  else if(this.temperature < 25) {
    return "medium-usage"}
  else {return "high-usage"}
};
