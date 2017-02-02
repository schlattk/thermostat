describe('Thermostat', function(){
  thermostat = new Thermostat();

  it('should start with a temperature of 20c', function(){
    expect(thermostat.temperature).toBe(20);
  });
});
