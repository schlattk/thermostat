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
    it("cannot be more than maximum", function(){
      thermostat.powerSaverOn();
      thermostat.temperature = 25;
      expect(function(){thermostat.increase()}).toThrow("Power Saver is on - Maximum Temperature is 25");
    });
    it("cannot be more than maximum", function(){
      thermostat.powerSaverOff();
      thermostat.temperature = 32;
      expect(function(){thermostat.increase()}).toThrow("Maximum Temperature is 32");
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

  describe('powerSaverOn', function(){
    it('maximum temperature is set at 25c', function(){
      thermostat.maximum = 26
      thermostat.powerSaverOn();
      expect(thermostat.maximum).toBe(25);
    });
  });

  describe('powerSaverOff', function(){
    it('maximum temperature is set at 32c', function(){
      thermostat.maximum = 33
      thermostat.powerSaverOff();
      expect(thermostat.maximum).toBe(32);
    });
  });
  describe('Reset', function(){
    it("changes temperature to 20c",function(){
      thermostat.temperature = 25;
      thermostat.reset();
      expect(thermostat.temperature).toBe(20);
    });
  });
  describe('Energy usage',function(){
    it("checks current energy consumption", function(){
      thermostat.temperature = 16;
      expect(thermostat.energyUsage()).toEqual("low-usage");
      thermostat.temperature = 23;
      expect(thermostat.energyUsage()).toEqual("medium-usage");
      thermostat.temperature = 28;
      expect(thermostat.energyUsage()).toEqual("high-usage");
    });
  });

});
