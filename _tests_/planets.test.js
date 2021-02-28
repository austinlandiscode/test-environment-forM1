import {Calculator} from './../src/planets.js'

describe ('Calculator', () => {

  test('should correctly create a calculator object with a base age',() => {
    const calculator = new Calculator('testAge','testSex','testPlanet');
    expect(calculator.age).toEqual('testAge');
    expect(calculator.sex).toEqual('testSex');
    expect(calculator.planet).toEqual('testPlanet');
  });

  test('should intake age and return years on Mercury', () => {
    const mercury = new Calculator(5,'Male', 'Mercury');
    expect(mercury.checkPlanetYears(mercury.planet)).toEqual(20);
  });

  test('should take an age and return years on Venus', () => {
    const venus = new Calculator(5,'Male','Venus');
    expect(venus.checkPlanetYears(venus.planet)).toEqual(8);
  });

  test ('should take an age and return years on Mars', () => {
    const mars = new Calculator(10,'Male','Mars');
    expect(mars.checkPlanetYears(mars.planet)).toEqual(5);
  });

  test ('should take an age and return years on Jupiter', () => {
    const jupiter = new Calculator(20,'Female','Jupiter');
    expect(jupiter.checkPlanetYears(jupiter.planet)).toEqual(1);
  });

  test ('should take an age, convert it to years on specified planet, then convert it to years left to live', () => {
    const human = new Calculator(0,'','');
    expect(human.checkPlanetYearsLeft('','')).toEqual(80);
  });

  test ('should take an age, convert it to years on specified planet, then convert it to years left to live for a Male', () => {
    const human = new Calculator('','Male','');
    expect(human.checkPlanetYearsLeft('','')).toEqual(75);
    });

  test ('should take an age, convert it to years on specified planet, then convert it to years left to live for a Female on Mercury', () => {
    const human = new Calculator(10,'Female','Mercury');
    expect(human.ageOnPlanet).toEqual(41)
  });

  test ('should take an age, convert it to years on specified planet, then convert it to years left to live for a Male in South America', () => {
    const human = new Calculator('','Male','South America','');
    expect(human.checkPlanetYearsLeft()).toEqual(72);
    });

  test ('should take an age, convert it to years on specified planet, then convert it to years left to live for a Female in South America', () => {
    const human = new Calculator('','Female','South America','');
    expect(human.checkPlanetYearsLeft()).toEqual(78);
    });

  test ('should take an age, convert it to years on specified planet, then convert it to years left to live for a Male in Europe', () => {
    const human = new Calculator('','Male','Europe','');
    expect(human.checkPlanetYearsLeft()).toEqual(79);
    });

  test ('should take an age, convert it to years on specified planet, then convert it to years left to live for a Female in Europe', () => {
    const human = new Calculator('','Female','Europe','');
    expect(human.checkPlanetYearsLeft()).toEqual(84);
    });

  test ('should take an age, convert it to years on specified planet, then convert it to years left to live for a Male in Asia', () => {
    const human = new Calculator('','Male','Asia','');
    expect(human.checkPlanetYearsLeft()).toEqual(76);
    });

  test ('should take an age, convert it to years on specified planet, then convert it to years left to live for a Female in Asia', () => {
    const human = new Calculator('','Female','Asia','');
    expect(human.checkPlanetYearsLeft()).toEqual(80);
    });
  
  test ('should take an age, convert it to years on specified planet, then convert it to years left to live for a Male in Africa', () => {
    const human = new Calculator('','Male','Africa','');
    expect(human.checkPlanetYearsLeft()).toEqual(62);
    });
  
  test ('should take an age, convert it to years on specified planet, then convert it to years left to live for a Female in Africa', () => {
    const human = new Calculator('','Female','Africa','');
    expect(human.checkPlanetYearsLeft()).toEqual(65);
    });

  test ('should take an age, convert it to years on specified planet, then convert it to years left to live for a Male in Australia', () => {
    const human = new Calculator('','Male','Australia','');
    expect(human.checkPlanetYearsLeft()).toEqual(81);
    });

  test ('should take an age, convert it to years on specified planet, then convert it to years left to live for a Male in Australia', () => {
    const human = new Calculator('','Female','Australia','');
    expect(human.checkPlanetYearsLeft()).toEqual(85);
    });
});