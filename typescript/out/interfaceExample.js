"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Developer = void 0;
var Developer = /** @class */ (function () {
    function Developer(name, language) {
        this.name = name;
        this.language = language;
    }
    Developer.prototype.code = function () {
        console.log("My name is " + this.name + ", I love " + this.language);
    };
    return Developer;
}());
exports.Developer = Developer;
var developer = {
    name: "Abhishek",
    language: "python",
    code: function () {
        console.log("My name is Abhishek, I love python");
    }
};
developer.code();
developer = new Developer("Abhishek Ghosh", "Java");
developer.code();
var draw = function (point) {
    console.log(point);
};
draw({ x: 25, y: 25 });
