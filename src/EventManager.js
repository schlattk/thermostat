$('#Up').on("click", function (){
  thermostat.increase()
});

$('#Down').on("click", function (){
  thermostat.decrease()
});

$('#Reset').on("click", function (){
  thermostat.reset()
});

$('#powerStatus').change(function (){
  if($(this).val() == "powerSaverOn") {
    thermostat.powerSaverOn()
  }
  if($(this).val() == "powerSaverOff") {
    thermostat.powerSaverOff()
  }
});
