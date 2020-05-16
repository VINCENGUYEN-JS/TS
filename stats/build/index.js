"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var MatchReader_1 = require("./MatchReader");
var MatchResult_1 = require("./MatchResult");
/**
 * Inheritance
 */
// const reader = new MatchReader("football.csv");
// reader.read();
// reader.data;
// let manUnitedWins = 0;
// for (let match of reader.data) {
//   if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
//     manUnitedWins++;
//   } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
//     manUnitedWins++;
//   }
// }
/**
 * Composition
 */
var csvFileReader = new CsvFileReader_1.CsvFileReader("football.csv");
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var manUnitedWins = 0;
for (var _i = 0, _a = matchReader.matches; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === "Man United" && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(manUnitedWins);
/**
 * Bad Approach
 */
// const matches = fs
//   .readFileSync("football.csv", {
//     encoding: "utf-8",
//   })
//   .split("\n")
//   .map((row: string): string[] => row.split(","));
// let manUnitedWins = 0;
// for (let match of reader.data) {
//   if (match[1] === "Man United" && match[5] === "H") {
//     manUnitedWins++;
//   } else if (match[2] === "Man United" && match[5] === "A") {
//     manUnitedWins++;
//   }
// }
