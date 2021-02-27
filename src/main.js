import Calculator from './../src/planets.js';
import './css/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $("#planetVariables").submit(function() {
    event.preventDefault();
    let age = parseInt($('#userAge').val());
    let sex = $('#userSex').val();
    let continent = $('#userContinent').val();
    let planet = $('#userPlanet').val();

    let ageCalculator = new Calculator(age,sex,continent,planet);
  
  ageCalculator.CheckYears(this.planetYears);
  $('#output').text(`You are ${age} on earth, but will be ${this.planetYears} on ${planet}`);

  let yearsCalculator = new Calculator(age,sex,continent,planet);

  yearsCalculator.CheckYearsLeft(this.planetYearsLeft);
  $('#output2').text(`You are ${age} on earth, and ${this.planetYears} on ${planet}. But you have ${this.planetYearsLeft} on ${planet}`);
  });
});