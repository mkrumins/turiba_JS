var Car = /** @class */ (function () {
    function Car(inputs, inputs2) {
        this.functionNew = function () {
            console.log("Hey!");
        };
        this.durvis = inputs;
        this.nosaukums = inputs2;
        this.strada = true;
    }
    return Car;
}());
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.main = function () {
        var objekts = new Car(4, "Audi");
        var objekt2 = new Car(3, "BMW");
    };
    return Main;
}());
