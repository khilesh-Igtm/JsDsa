// Logic
// Agar year % 400 == 0 → leap year.
// Nahin toh agar year % 100 == 0 → NOT leap year.
// Nahin toh agar year % 4 == 0 → leap year.
// Baaki sab → NOT leap year.
const year = 2020
console.log(leapYear(year))
function leapYear(year){
  if(year%400 == 0) return true;
  if(year %100 == 0) return false;
  return year%4 === 0
}