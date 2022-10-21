const Thermostat = require("./thermostat");

describe ('Thermostat', () => {
  it('creates a new thermostat and returns temperature at 20', () => {
    const thermostat = new Thermostat()
    expect(thermostat.getTemperature()).toEqual( 20 );
  });

  it('raises the temperature my one degree', () => {
    const thermostat = new Thermostat();
    thermostat.up();
    expect(thermostat.getTemperature()).toEqual( 21 );
  });

  it('does not go below 10 degrees', () => {
    const thermostat = new Thermostat();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    expect(thermostat.down()).toEqual( "You have reached 10 degrees. You cannot go any lower." );
  });

  it('lowers the temperature my one degree', () => {
    const thermostat = new Thermostat();
    thermostat.down();
    expect(thermostat.getTemperature()).toEqual( 19 );
  });
});