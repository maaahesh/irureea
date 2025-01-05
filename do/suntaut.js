// Define the regular expression to match weekdays
var weekdayRe = /Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday/;

// Example string
var string = "Today is Wednesday and tomorrow is Thursday.";

// Start index
var i = 9; // Starting from "Wednesday"

// Execute regular expression on the sliced string
var n = weekdayRe.exec(string.slice(i));

console.log(n); // Output: ["Wednesday"]
