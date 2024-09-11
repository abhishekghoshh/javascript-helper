export class Human{
    protected shout(): void{
        console.log("I am a human");
    }
}
export class User extends Human{
    private firstName:string;
    private lastName:string;
    constructor(firstName: string, lastName: string) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
    }
    public getFirstName():string {
        return this.firstName;
    }
    public setFirstName(firstName: string):void {
        this.firstName = firstName;
    }
    public getLastName():string {
        return this.lastName;
    }
    public setLastName(lastname: string):void {
        this.lastName = lastname;
    }
    public show():void {
        console.log(`${this.firstName} ${this.lastName}`);
    }
    public shout() {
        super.shout(); 
    }
}

let nasim = new User("Abhishek", "Ghosh");
nasim.show();

nasim.setFirstName("Nasim");
nasim.setLastName("Molla");
nasim.show();
nasim.shout();