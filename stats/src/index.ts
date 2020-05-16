import fs from "fs";
import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";

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
const csvFileReader = new CsvFileReader("football.csv");
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let manUnitedWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
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
