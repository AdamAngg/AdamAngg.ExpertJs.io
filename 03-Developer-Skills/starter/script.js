// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/*const x = 23;
console.log();

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9];
for (let i = 0; i <= array.length; i++) {
  console.log(Math.max(...array));
}

function kelvin() {
  const measure = {
    type: "temp",
    unit: "celsius",
    value: Number(prompt("degrees celsius:")),
  };
  const kelvins = measure["value"] + 273;
  return kelvins;
}
console.log(kelvin());*/

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

function makeAString(arr) {
  let strings = arr[0] + `^C` + ` ${arr.indexOf(arr[0 + 1])} Days`;
  for (let i = 1; i <= arr.length - 1; i++) {
    strings = strings + ` ${arr[i]}^C...${arr.indexOf(arr[i]) + 1}Days`;
  }
  return strings;
}
console.log(makeAString(data1));
