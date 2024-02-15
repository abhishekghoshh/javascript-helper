"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = exports.Item = void 0;
var Item = /** @class */ (function () {
    function Item(name, count) {
        this.name = name;
        this.count = count;
    }
    Object.defineProperty(Item.prototype, "Name", {
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "Count", {
        get: function () {
            return this.count;
        },
        set: function (count) {
            this.count = count;
        },
        enumerable: false,
        configurable: true
    });
    return Item;
}());
exports.Item = Item;
var List = /** @class */ (function () {
    function List() {
        this.count = 0;
        this.list = [];
    }
    List.prototype.add = function (obj) {
        this.list[this.count] = obj;
        this.count = this.count + 1;
    };
    List.prototype.get = function (index) {
        if (index <= this.count) {
            return this.list[index];
        }
        throw new Error("");
    };
    List.prototype.size = function () {
        return this.count;
    };
    List.prototype.toString = function () {
        return this.list;
    };
    return List;
}());
exports.List = List;
function echo(item) {
    console.log(item);
    return item;
}
var list = new List();
list.add(new Item("Mobile", 100));
list.add(new Item("Laptop", 200));
list.add(new Item("Watch", 50));
console.log(list.get(1));
console.log(list.size());
console.log(list.toString());
console.log(list);
echo(list.get(0));
// echo({ "name": "Abhishk Ghosh", "nount": 1 });
