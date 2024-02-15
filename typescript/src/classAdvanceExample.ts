export class Person{
    constructor(private firstName: string,private lastName:string) { }
    get FirstName() {
        return this.firstName;
    }
    set FirstName(firstName: string) {
        this.firstName = firstName;
    }
    get LastName() {
        return this.lastName;
    }
    set LastName(lastName: string) {
        this.lastName = lastName;
    }
    public show():void {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

let abhishek = new Person("Abhishek", "Ghosh");
abhishek.show();

abhishek.FirstName = "Nasim";
abhishek.LastName = "Molla";
abhishek.show();