function Vehicle(make, model, year) {
    return {
        make,model,year
    }
}
let vehicles = [
    new Vehicle("Dodge", "Ram 150", "2011"),
    new Vehicle("Dodge", "Charger", "2015"),
    new Vehicle("Nissan", "Rouge", "2016")
]

let models = vehicles.map(vehicle => vehicle.model);
//mapping object to another object

let filterVehicles = vehicles.filter(vehicle => vehicle.make == "Dodge");
//filter all the object and return the matched object

let findVehicle = vehicles.find(vehicle => vehicle.make == "Dodge"); 
//it will return only the 1st matched object other wise it will return undefined

let everyVehicle = vehicles.every(vehicle => vehicle.make == "Dodge");
// return true if all the object satisfies the criteria otherwise returns false

let someVehicle = vehicles.some(vehicle => vehicle.make == "Dodge");
// return true if atleast one of the object satisfies the criteria otherwise returns false

let grades = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

let total = grades.reduce((sum, grade) => {
    console.log(sum, grade);
    return sum + grade;
}, 0);

//sum will be assigned to 0
//0 is the stating point and every item will be added to it

console.log(total);


 
/* Refrence
map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
*/