

function update(){
$('#Temperature').text(thermostat.temperature);
$('#energyUsage').text(thermostat.energyUsage());
  if (thermostat.energyUsage() === "low-usage"){
    $('#energyUsage').css("color", "green");
  }
  else if (thermostat.energyUsage()=== "medium-usage") {
    $('#energyUsage').css("color", "#585858");
  }
  else {
    $('#energyUsage').css("color", "red");
  }
};
update();

$('#Up').on("click", function (){
  thermostat.increase()
  update();
});

$('#Down').on("click", function (){
  thermostat.decrease()
  update();
});

$('#Reset').on("click", function (){
  thermostat.reset()
  update();
  $('#powerStatus').val("powerSaverOn");
});

$('#powerStatus').change(function (){
  if($(this).val() == "powerSaverOn") {
    thermostat.powerSaverOn()
  }
  if($(this).val() == "powerSaverOff") {
    thermostat.powerSaverOff()
  }
});

// $.get( "http://api.openweathermap.org/data/2.5/weather?q=London&appid=202ee2c09a45f815c3c0193748cea31b&units=metric", function( data ) {
//   $( "#outside" ).text("Outside temperature " + Math.floor(data.main.temp) + "°C");
// });

$('#city').change(function() {
  var city = $('#city').val();
  $.get( "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=202ee2c09a45f815c3c0193748cea31b&units=metric", function(data) {
    $("#outside").text("Outside temperature in " + city + " is " + Math.floor(data.main.temp) + "°C.")
  })
})
