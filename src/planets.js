export class Calculator {
  constructor(age, sex, continent, planet) {
    this.age = age;
    this.sex = sex;
    this.continent = continent;
    this.planet = planet;
    this.planetYears = 0;
    this.planetYearsLeft = 0;
  }

  checkYears() {
    if (this.planet === 'Mercury') {
      let planetYears = (Math.floor(this.age / 0.24));
      return planetYears;
    } else if (this.planet === 'Venus') {
      let planetYears = (Math.floor(this.age / 0.62));
      return planetYears;
    } else if (this.planet === 'Mars') {
      let planetYears = (Math.floor(this.age / 1.88));
      return planetYears;
    } else if (this.planet === 'Jupiter') {
      let planetYears = (Math.floor(this.age / 11.86));
      return planetYears;
    }
  }
  
  checkYearsLeft() {
    if (this.sex === 'Male' && this.continent === 'North America') {
      let planetYearsLeft = (77 - this.age);
      return planetYearsLeft;
    } else if (this.sex === 'Female' && this.continent === 'North America') {
      let planetYearsLeft = (81 - this.age);
      return planetYearsLeft;
    } else if (this.sex === 'Male' && this.continent === 'South America') {
      let planetYearsLeft = (72 - this.age);
      return planetYearsLeft;
    } else if (this.sex === 'Female' && this.continent === 'South America') {
      let planetYearsLeft = (78 - this.age);
      return planetYearsLeft;
    } else if (this.sex === 'Male' && this.continent === 'Europe') {
      let planetYearsLeft = (79 - this.age);
      return planetYearsLeft;
    } else if (this.sex === 'Female' && this.continent === 'Europe') {
      let  planetYearsLeft = (84 - this.age);
      return planetYearsLeft;
    } else if (this.sex === 'Male' && this.continent === 'Asia') {
      let planetYearsLeft = (76 - this.age);
      return planetYearsLeft;
    } else if (this.sex === 'Female' && this.continent === 'Asia') {
      let planetYearsLeft = (80 - this.age);
      return planetYearsLeft;
    } else if (this.sex === 'Male' && this.continent === 'Africa') {
      let planetYearsLeft = (62 - this.age);
      return planetYearsLeft;
    } else if (this.sex === 'Female' && this.continent === 'Africa') {
      let planetYearsLeft = (65 - this.age);
      return planetYearsLeft;
    } else if (this.sex === 'Male' && this.continent === 'Australia') {
      let planetYearsLeft = (81 - this.age);
      return planetYearsLeft;
    } else if (this.sex === 'Female' && this.continent === 'Australia') {
      let planetYearsLeft = (85 - this.age);
      return planetYearsLeft;
    } else {
      let planetYearsLeft = (78 - this.age);
      return planetYearsLeft;
    }
  }
}