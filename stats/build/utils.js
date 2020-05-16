"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = function (dateString) {
    // 28/10/2018
    var dateParts = dateString.split("/"); // ["28","10","2018"]
    var convertedDateParts = dateParts.map(function (value) {
        return parseInt(value);
    });
    //January starts with 0 , we need to -1
    return new Date(convertedDateParts[2], convertedDateParts[1] - 1, convertedDateParts[0]);
};
