/*
 * Best practices for code formatting (JS)
 * LinkedIn Learning
 */

"use strict";

// Variables
const city = "Chicago";
const departments = ["bakery", "produce", "meat", "dairy", "beverages"];
const userPrefs = { city: city, lat: 41.878113, lon: -87.629799 };

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log(position.coords.latitude, position.coords.longitude);
    },
    () => {
      console.log(userPrefs.lat, userPrefs.lon);
    },
  );
} else {
  console.log(userPrefs.lat, userPrefs.lon);
}

const makeLowerCase = (input) => {
  return String(input).toLowerCase();
};

function getSum(a, b) {
  return a + b;
}

console.log(getSum(1, 2));
console.log(makeLowerCase(departments[0]));
