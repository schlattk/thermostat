Thermostat = function(){
  this.temperature = 20;
};

Thermostat.prototype.increase = function () {
  this.temperature += 1;
};
