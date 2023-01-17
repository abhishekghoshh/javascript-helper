let hotRod = {
    sound: "vroom",
    soundOf: function () {
        console.log(`Sound of this is : ${this.sound}`);
    }
};
let soundFunction = hotRod.soundOf;
soundFunction();

let boundedSoundFunction = soundFunction.bind(hotRod);
boundedSoundFunction();

let log = function(){
    console.log(`Hi ${this.firstName} ${this.lastName}`);
}
let Abhishek = { firstName: "Abhishek", lastName: "Ghosh" };
let Nasim = { firstName: "Nasim", lastName: "Molla" };

log();
log.bind(Abhishek)();
log.bind(Nasim)();
