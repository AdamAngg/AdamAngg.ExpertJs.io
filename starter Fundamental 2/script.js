/*'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log(`i can drive`);


function logger() {
    console.log(`My name is Adam`);
}

// wywoływanie funkcji
logger();
logger();
logger();


function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}


//functions
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const birthYear = Number(prompt());
const year = 2022;

function ageCalculaction() {
    const calculate = year - birthYear;
    return calculate;
}

const result = ageCalculaction(birthYear, year);

console.log(result);

const birthYear = Number(prompt());
const year = 2022;
const retirement = 75;
const firstname = prompt(`podaj imie`);

// Arrow Function
const calcAge = () => {
    const retAge = retirement - (year - birthYear);
    return `${firstname} have ${retAge} more years till retirement`;
}
const age = calcAge();
console.log(age);*/


function cutFruitPieces(fruit) {
    return fruit * 4;
}


function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}
const result = fruitProcessor(2, 3);
console.log(result);






