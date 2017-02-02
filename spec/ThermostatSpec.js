describe('Thermostat', function(){
  thermostat = new Thermostat();

  it('should start with a temperature of 20c', function(){
    expect(thermostat.temperature).toBe(20);
  });

  describe('Increase', function(){
    it('should increase temperature', function(){
      expect(thermostat.increase).toBeDefined();
    });
    it('should increase temperature by 1c', function(){
      thermostat.increase();
      expect(thermostat.temperature).toBe(21);
    });
  });
});
