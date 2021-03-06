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
    expect(human.yearsLeftOnPlanet).toEqual(292)
  });

  test ('should take an age, convert it to years on specified planet, then convert it to years left to live for a Male on Mercury', () => {
    const human = new Calculator('10','Male','Mercury');
    expect(human.yearsLeftOnPlanet).toEqual(271);
    });

  test ('should take an age, convert it to years on specified planet, then convert it to years left to live for a Female on Venus', () => {
    const human = new Calculator('10','Female','Venus');
    expect(human.yearsLeftOnPlanet).toEqual(113);
    });

  test ('should take an age, convert it to years on specified planet, then convert it to years left to live for a Male on Venus', () => {
    const human = new Calculator('10','Male','Venus');
    expect(human.yearsLeftOnPlanet).toEqual(104);
    });

  test ('should take an age, convert it to years on specified planet, then convert it to years left to live for a Female on Mars', () => {
    const human = new Calculator('10','Female','Mars');
    expect(human.yearsLeftOnPlanet).toEqual(37);
    });

  test ('should take an age, convert it to years on specified planet, then convert it to years left to live for a Male on Mars', () => {
    const human = new Calculator('10','Male','Mars');
    expect(human.yearsLeftOnPlanet).toEqual(34);
    });

  test ('should take an age, convert it to years on specified planet, then convert it to years left to live for a Female on Jupiter', () => {
    const human = new Calculator('10','Female','Jupiter');
    expect(human.yearsLeftOnPlanet).toEqual(6);
    });
  
  test ('should take an age, convert it to years on specified planet, then convert it to years left to live for a Male on Jupiter', () => {
    const human = new Calculator('10','Male','Jupiter');
    expect(human.yearsLeftOnPlanet).toEqual(6);
    });
  test ('should take an age, convert it to years on specified planet, then convert it to years left to live for a Male on Jupiter', () => {
    const human = new Calculator('1000','Male','Jupiter');
    expect(human.yearsLeftOnPlanet).toEqual(`You're dead yo you are 78 over your life`);
    });
});