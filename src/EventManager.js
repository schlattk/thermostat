$('#Up').on("click", function (){
  thermostat.increase()
  $('#Temperature').text(thermostat.temperature);
  $('#energyUsage').text(thermostat.energyUsage());

});

$('#Down').on("click", function (){
  thermostat.decrease()
  $('#Temperature').text(thermostat.temperature);
  $('#energyUsage').text(thermostat.energyUsage());
});

$('#Reset').on("click", function (){
  thermostat.reset()
  $('#Temperature').text(thermostat.temperature);
  $('#energyUsage').text(thermostat.energyUsage());
});

$('#powerStatus').change(function (){
  if($(this).val() == "powerSaverOn") {
    thermostat.powerSaverOn()
  }
  if($(this).val() == "powerSaverOff") {
    thermostat.powerSaverOff()
  }
});
$('#Temperature').text(thermostat.temperature);
$('#energyUsage').text(thermostat.energyUsage());
