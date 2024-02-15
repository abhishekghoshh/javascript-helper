"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.week = void 0;
var week;
(function (week) {
    week[week["SUN"] = 0] = "SUN";
    week[week["MON"] = 1] = "MON";
    week[week["TUE"] = 2] = "TUE";
    week[week["WED"] = 3] = "WED";
    week[week["FRI"] = 4] = "FRI";
    week[week["SAT"] = 5] = "SAT";
})(week = exports.week || (exports.week = {}));
var day = week.SUN;
console.log(day);
