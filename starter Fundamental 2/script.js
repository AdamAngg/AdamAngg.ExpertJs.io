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
console.log(age);*


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

function yearsUntil(birthYear) {
    const yearsUntil = 65 - (2022 - birthYear);
    return yearsUntil;
}

function yearUntilRetirement(birthYear, firstname) {
    const retirementYears = yearsUntil(birthYear);
    return `urodzony w ${birthYear} ${firstname} bedzie musiał czekać jeszcze ${retirementYears}`;
}

const result = yearUntilRetirement(1998, `Adam`);
console.log(result);


const calcAverage = (x, y, z) => {

    return (x + y + z) / 3;
};
function checker() {
    const dolphinResult = calcAverage(85, 54, 41);
    const koalasResult = calcAverage(23, 34, 27);
    if (dolphinResult >= koalasResult * 2) {
        console.log(`Wygrały delfiny bo ${dolphinResult} jest dwa razwy wiekszy niz kolala result ${koalasResult}`);
    }
    else if (koalasResult >= dolphinResult * 2) {
        console.log(`No koala wygrał bo ${koalasResult} jest dwa razy wieksza niz doplfinow ${dolphinResult}`);
    }
    else {
        console.log(`no nikt nie wygrał bo wynik jakis taki nie podwojony`);
    }
}

checker();

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends.length);


friends[2] = "Jay";
console.log(friends);


const jonas = ['Jonas', 'Ang', 2022 - 1991, 'teacher', friends];
console.log(jonas);

const friends = ['Michael', 'Steven', 'Peter'];
friends.push('Jay');
friends.unshift('John');
friends.pop();
friends.shift();
console.log(friends);
console.log(friends.indexOf('Steven'));
console.log(friends.includes('Michael'));
const bills = Number(prompt('Podaj rachunek to oblicze ci tipa'));
const tips = [];
let tipp;
function calcTip(bill) {
if (bill >= 50 && bill <= 300) {
    tipp = bill * 0.15;
    }
    else {
        tipp = bill * 0.20;
    }
    return tipp;
}

console.log(calcTip(bills));
tips.push(bills + calcTip(bills));
console.log(tips);

const Adam = {
    firstName: 'Adam',
    lastName: 'Anglart',
    age: 2022 - 1998,
    job: 'programista',
    friends: ['Michal', 'Jakub', 'Dominik']
};

console.log(Adam['firstName']);

const nameKey = 'Name';
console.log(Adam['first' + nameKey])

console.log(`${Adam['firstName']} ma ${Adam.friends.length}, i jego najlepszym kolegą jest ${Adam.friends[0]}`);

const Adam = {
    firstName: 'Adam',
    lastName: 'Anglart',
    birthYear: 1998,
    job: 'programista',
    friends: ['Michal', 'Jakub', 'Dominik'],
    hasDriversLicense: true,

    // calsAge: function (birthYear) {
    //     return 2022 - birthYear;
    // }

    calsAge: function () {
        this.age = 2022 - this.birthYear;
        return;

    },
    stringMakingFunction: function () {
        if (this.hasDriversLicense) {
            return "He has Driving License";
        }
    }
};

Adam.calsAge();

console.log(`${Adam.firstName} is a ${Adam.age}-years old ${Adam.job} and ${Adam.stringMakingFunction()}`);

const Mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBmi: function () {
        const bmi = this.mass / (this.height ** 2);
        return bmi;
    }
};
const John = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBmi: function () {
        const bmi = this.mass / (this.height ** 2);
        return bmi;
    }
};
if (John.calcBmi() > Mark.calcBmi()) {
    console.log(`John's bmi (${John.calcBmi()}) is higher than Marks bmi`);
}
else if (Mark.calcBmi() > John.calcBmi()) {
    console.log(`Marks's bmi (${Mark.calcBmi()}) is higher than Johns bmi`)
}
else {
    console.log(`Their BMI is the same`);
}

console.log('Lifting weights repetition 1');

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}*/
// const adamArray = [
//     'Adam',
//     'Anglart',
//     2022 - 1998,
//     'teacher',
//     ['michal', 'Pawel', 'Jakub']
// ]

// let arrayy = [];

// for (let i = 0; i < adamArray.length; i++) {
//     if (adamArray[i] !== 24) break;
//     arrayy[i] = [typeof adamArray[i]];
//     console.log(adamArray[i], arrayy[i]);
// }




// let calcYears = [];
// const years = [1991, 2007, 1969, 2020];

// for (i = 0; i < years.length; i++) {
//     calcYears.push(2022 - years[i]);

// }
// console.log(calcYears);

/*
const adamArray = [
    'Adam',
    'Anglart',
    2022 - 1998,
    'teacher',
    ['michal', 'Pawel', 'Jakub']
]


for (let i = 0; i < adamArray.length; i++) {
    console.log(adamArray[i])
}
for (let x = adamArray.length - 1; x >= 0; x--) {
    console.log(adamArray[x])
}


for (let excercise = 1; excercise <= 3; excercise++) {
    console.log(`------ starting excercise ${excercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`lifting weight rep = ${rep}`);
    }
}
function calcTip(bill) {
    bill >= 50 && bill <= 300 ? bill = bill * 0.15 : bill = bill * 0.20
    return bill;
}

function calcAverage(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum / arr.length;
}
let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let total = [];
let tips = [];

for (i = 0; i <= bills.length - 1; i++) {
    tips.push(calcTip(bills[i]));
    total.push(bills[i] + calcTip(bills[i]));
}
console.log(bills, tips, total);
console.log(calcAverage(tips));*/
