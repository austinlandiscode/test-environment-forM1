export class Calculator {
  constructor(age, sex, planet) {
    this.age = age;
    this.sex = sex;
    this.planet = planet;
    this.ageOnPlanet = this.checkPlanetYears();
    this.yearsLeftOnPlanet = this.checkPlanetYearsLeft();
  }
  checkPlanetYears() {
    let planetYears = 0;
    if (this.planet === 'Mercury') {
      planetYears = (Math.floor(this.age / 0.24));
    } else if (this.planet === 'Venus') {
      planetYears = (Math.floor(this.age / 0.62));
    } else if (this.planet === 'Mars') {
      planetYears = (Math.floor(this.age / 1.88));
    } else if (this.planet === 'Jupiter') {
      planetYears = (Math.floor(this.age / 11.86));
    } 
    return planetYears;
  }

  checkPlanetYearsLeft(){
    let planetYearsLeft = 0;
    let lifeExpectancy = 80;

    if (this.sex === "Male") {
      lifeExpectancy -= 5; 
    }
    if (this.planet === 'Mercury') {
      planetYearsLeft = (Math.floor(lifeExpectancy / 0.24) - this.ageOnPlanet); 
    } else if (this.planet === 'Venus') {
      planetYearsLeft = (Math.floor(lifeExpectancy / 0.62) - this.ageOnPlanet);
    } else if (this.planet === 'Mars') {
      planetYearsLeft = (Math.floor(lifeExpectancy/ 1.88) - this.ageOnPlanet);
    } else if (this.planet === 'Jupiter') {
      planetYearsLeft = (Math.floor(lifeExpectancy / 11.86) - this.ageOnPlanet);
    } else {
      planetYearsLeft = lifeExpectancy - this.age;
    }
    if (planetYearsLeft < 0) {
      planetYearsLeft = `You're dead yo you are ${planetYearsLeft * -1} over your life`
    }
    return planetYearsLeft;
  }
}