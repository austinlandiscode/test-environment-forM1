import {Calculator} from './../src/planets.js'

describe ('Calculator', () => {

  test('should correctly create a calculator object with a base age',() => {
    const calculator = new Calculator('testAge','testSex', 'testContinent', 'testPlanet');
    expect(calculator.age).toEqual('testAge');
    expect(calculator.sex).toEqual('testSex');
    expect(calculator.continent).toEqual('testContinent');
    expect(calculator.planet).toEqual('testPlanet');
  });

  test('should intake age and return years on Mercury', () => {
    const mercury = new Calculator(5,'','','Mercury');
    expect(mercury.checkYears()).toEqual(20);

  });

  test('should take an age and return years on Venus', () => {
    const venus = new Calculator(5,'','','Venus');
    expect(venus.checkYears()).toEqual(8);
    });

  test ('should take an age and return years on Mars', () => {
    const mars = new Calculator(10,'','','Mars');
    expect(mars.checkYears()).toEqual(5);
    });

  test ('should take an age and return years on Jupiter', () => {
    const jupiter = new Calculator(20,'','','Jupiter');
    expect(jupiter.checkYears()).toEqual(1);
    });

  test ('should take an age, convert it to years on specified planet, then convert it to years left to live', () => {
    const human = new Calculator('','','','');
    expect(human.checkYearsLeft()).toEqual(78);
    });

  test ('should take an age, convert it to years on specified planet, then convert it to years left to live for a male in North America', () => {
    const human = new Calculator('','Male','North America','');
    expect(human.checkYearsLeft()).toEqual(77);
    });

  test ('should take an age, convert it to years on specified planet, then convert it to years left to live for a Female in North America', () => {
    const human = new Calculator('','Female','North America','');
    expect(human.checkYearsLeft()).toEqual(81);
    });

  test ('should take an age, convert it to years on specified planet, then convert it to years left to live for a Male in South America', () => {
    const human = new Calculator('','Male','South America','');
    expect(human.checkYearsLeft()).toEqual(72);
    });

  test ('should take an age, convert it to years on specified planet, then convert it to years left to live for a Female in South America', () => {
    const human = new Calculator('','Female','South America','');
    expect(human.checkYearsLeft()).toEqual(78);
    });

  test ('should take an age, convert it to years on specified planet, then convert it to years left to live for a Male in Europe', () => {
    const human = new Calculator('','Male','Europe','');
    expect(human.checkYearsLeft()).toEqual(79);
    });

  test ('should take an age, convert it to years on specified planet, then convert it to years left to live for a Female in Europe', () => {
    const human = new Calculator('','Female','Europe','');
    expect(human.checkYearsLeft()).toEqual(84);
    });

  test ('should take an age, convert it to years on specified planet, then convert it to years left to live for a Male in Asia', () => {
    const human = new Calculator('','Male','Asia','');
    expect(human.checkYearsLeft()).toEqual(76);
    });

  test ('should take an age, convert it to years on specified planet, then convert it to years left to live for a Female in Asia', () => {
    const human = new Calculator('','Female','Asia','');
    expect(human.checkYearsLeft()).toEqual(80);
    });
  
  test ('should take an age, convert it to years on specified planet, then convert it to years left to live for a Male in Africa', () => {
    const human = new Calculator('','Male','Africa','');
    expect(human.checkYearsLeft()).toEqual(62);
    });
  
});