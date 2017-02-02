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

  describe('maximum temperature', function(){
    it("should be 25", function(){
      expect(thermostat.maximum).toBe(25);
    });
  });

  describe('Decrease',function(){
    it('should decrease temperature', function(){
      expect(thermostat.decrease).toBeDefined();
    });
    it('should decrease temperature by 1c', function(){
      thermostat = new Thermostat();
      thermostat.decrease();
      expect(thermostat.temperature).toBe(19);
    });
    it("cannot be less than 10", function(){
      thermostat.temperature = 10;
      expect(function(){thermostat.decrease()}).toThrow("Minimum Temperature is 10");
    });
  });
  describe('minimum temperature', function(){
    it("should be 10", function(){
      expect(thermostat.MINIMUM).toBe(10);
    });
  });

});
