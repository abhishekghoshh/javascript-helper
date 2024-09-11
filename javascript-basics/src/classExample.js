class Human{
    constructor(gender) {
        this.gender = gender;
    }
}

class Person extends Human{
    constructor(firstName, lastname, gender) {
        super(gender);
        this.firstName = firstName;
        this.lastname = lastname;
    }
    getFullName() {
        return `${this.firstName} ${this.lastname}`;
    }
    printGender() {
        console.log(`${this.getFullName()} is ${this.gender}`);
    }
}

let person = new Person("Abhishek", "Ghosh","male");
console.log(person.getFullName());
person.printGender();