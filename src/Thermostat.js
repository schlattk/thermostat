Thermostat = function(){
  this.temperature = 20;
  this.MINIMUM = 10;
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
