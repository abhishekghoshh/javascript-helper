"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = exports.Item = void 0;
class Item {
    constructor(name, count) {
        this.name = name;
        this.count = count;
    }
    get Name() {
        return this.name;
    }
    get Count() {
        return this.count;
    }
    set Name(name) {
        this.name = name;
    }
    set Count(count) {
        this.count = count;
    }
}
exports.Item = Item;
class List {
    constructor() {
        this.count = 0;
        this.list = [];
    }
    add(obj) {
        this.list[this.count] = obj;
        this.count = this.count + 1;
    }
    get(index) {
        if (index <= this.count) {
            return this.list[index];
        }
        throw new Error("");
    }
    size() {
        return this.count;
    }
    toString() {
        return this.list;
    }
}
exports.List = List;
function echo(item) {
    console.log(item);
    return item;
}
let list = new List();
list.add(new Item("Mobile", 100));
list.add(new Item("Laptop", 200));
list.add(new Item("Watch", 50));
console.log(list.get(1));
console.log(list.size());
console.log(list.toString());
console.log(list);
echo(list.get(0));
// echo({ "name": "Abhishk Ghosh", "nount": 1 });
