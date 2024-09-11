function show(a:number, b:number = 0) { //default value
    console.log("a is " + a);
    console.log("b is " + b);
}
function showDetails(firstName: string, lastName: string, gender ?: string){//optional value
    console.log("firstName is " + firstName);
    console.log("lastName is " + lastName);
    if (undefined != gender) {
        console.log("gender is " + gender);
    }
}

function echoAny(arg: any): any{
    console.log(arg);
    return arg;
}

show(10, 20);
show(50);

showDetails("Abhishek", "ghosh", "male");
showDetails("Nasim", "Molla");

let randObject = { "name": "Abhishek Ghosh", "gender": "Male" };
echoAny(randObject);
