export class Item{
    constructor(private name: string, private count: number) { }
    get Name(): string{
        return this.name;
    }
    get Count(): number{
        return this.count;
    }
    set Name(name:string){
        this.name = name;
    }
    set Count(count: number) {
        this.count = count;
    }
}

export class List<T>{
    private list: T[];
    private count: number;
    constructor() {
        this.count = 0;
        this.list = [];
    }
    public add(obj: T): void{
        this.list[this.count] = obj;
        this.count = this.count+1;
    }
    public get(index: number): T{
        if (index <= this.count) {
            return this.list[index];
        }
        throw new Error("");
    }
    public size(): number{
        return this.count;
    }
    public toString(): any{
        return this.list;
    }
}

function echo<T extends Item>(item:T):T {
    console.log(item);
    return item;
}

let list = new List<Item>();
list.add(new Item("Mobile", 100));
list.add(new Item("Laptop", 200));
list.add(new Item("Watch", 50));
console.log(list.get(1));
console.log(list.size());
console.log(list.toString());
console.log(list);
echo(list.get(0));
// echo({ "name": "Abhishk Ghosh", "nount": 1 });