let truck = {
    make: "Dodge",
    wheels:4
};
console.log(truck);
console.log(truck.make + " " + truck['make']);
//['make'] is better written in dot notation.

function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.getDescription = function () {
        console.log(`${this.make} ${this.model} ${this.year}`);
    }
}

function Vehicle(make, model, year) {
    return {
        make: make,
        model: model,
        year: year,
        getDescription: function () {
            console.log(`${this.make} ${this.model} ${this.year}`);
        }
    };
}

//Es6 enhanced object literal sign
function Vehicle(make, model, year) {
    return {
        make,
        model,
        year,
        getDescription() {
            console.log(`${this.make} ${this.model} ${this.year}`)
        }
    };
}
new Vehicle("Dodge", "Ram 1500", "2011").getDescription();