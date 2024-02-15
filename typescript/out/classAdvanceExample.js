"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Object.defineProperty(Person.prototype, "FirstName", {
        get: function () {
            return this.firstName;
        },
        set: function (firstName) {
            this.firstName = firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "LastName", {
        get: function () {
            return this.lastName;
        },
        set: function (lastName) {
            this.lastName = lastName;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.show = function () {
        console.log(this.firstName + " " + this.lastName);
    };
    return Person;
}());
exports.Person = Person;
var abhishek = new Person("Abhishek", "Ghosh");
abhishek.show();
abhishek.FirstName = "Nasim";
abhishek.LastName = "Molla";
abhishek.show();
