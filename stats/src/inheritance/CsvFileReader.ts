import fs from "fs";
import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";



export abstract class CsvFileReader<T> {
  data: T[] = [];
  abstract mapRow(row: string[]): T;
  constructor(public filename: string) {}
  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => row.split(","))
      .map(this.mapRow);
  }
}

/**Bad approach */
// .map((row: string[]):(Date | string | number | MatchResult) [] => {
//   return [
//     dateStringToDate(row[0]),
//     row[1],
//     row[2],
//     parseInt(row[3]),
//     parseInt(row[4]),
//     row[5] as MatchResult /**Type assertions we tell TS to consider this is one of the possible values enum */,
//     row[6],
//   ];
// });

//--second attemp

//define tuple as a new type MatchData
type MatchData = [Date, string, string, number, number, MatchResult, string];


class CsvFileR {
  data: MatchData[] = [];

  constructor(public filename: string) {}
  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => row.split(","))
      .map(this.mapRow);
  }

  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult /**Type assertions we tell TS to consider this is one of the possible values enum */,
      row[6],
    ];
  }
}
