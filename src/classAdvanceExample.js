class Person{
    name = "Abhishek Ghosh";
    getName = () =>{
        console.log(this.name);
    }

}

let person = new Person("Abhishek");
person.getName();