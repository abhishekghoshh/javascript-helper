"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get FirstName() {
        return this.firstName;
    }
    set FirstName(firstName) {
        this.firstName = firstName;
    }
    get LastName() {
        return this.lastName;
    }
    set LastName(lastName) {
        this.lastName = lastName;
    }
    show() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}
exports.Person = Person;
let abhishek = new Person("Abhishek", "Ghosh");
abhishek.show();
abhishek.FirstName = "Nasim";
abhishek.LastName = "Molla";
abhishek.show();
