"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Human = void 0;
var Human = /** @class */ (function () {
    function Human() {
    }
    Human.prototype.shout = function () {
        console.log("I am a human");
    };
    return Human;
}());
exports.Human = Human;
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(firstName, lastName) {
        var _this = _super.call(this) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        return _this;
    }
    User.prototype.getFirstName = function () {
        return this.firstName;
    };
    User.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    User.prototype.getLastName = function () {
        return this.lastName;
    };
    User.prototype.setLastName = function (lastname) {
        this.lastName = lastname;
    };
    User.prototype.show = function () {
        console.log(this.firstName + " " + this.lastName);
    };
    User.prototype.shout = function () {
        _super.prototype.shout.call(this);
    };
    return User;
}(Human));
exports.User = User;
var nasim = new User("Abhishek", "Ghosh");
nasim.show();
nasim.setFirstName("Nasim");
nasim.setLastName("Molla");
nasim.show();
nasim.shout();
