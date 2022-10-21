class Thermostat {
  constructor() {
    this.temperature = 20;
    this.minimumTemperature = 10;
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    return this.temperature += 1;
  }

  down() {
    if ( (this.temperature) <= this.minimumTemperature ) {
      return "You have reached 10 degrees. You cannot go any lower.";
  } else {
      return this.temperature -= 1;
  };
};
};

module.exports = Thermostat;

// next step - power saving mode