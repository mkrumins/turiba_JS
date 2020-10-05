var myStr;
var myNum;
var mybool;
var myAny;
var myArr1;
var myArr2;
var myArr3;
var myArr4;
// otrs veids, kā definēt Array
var myArr5;
var myArr6;
var myArr7;
var myArr8;
// var definēt apvienotu arry, bet secība ir būtiska
var compArr;
compArr = [3, "Hello"];
console.log(compArr);
// --------------------------------------------------------
// Funkcijas
// aiz ():number - tips, kas tiks atgriezts returnā
var getSumm = function (num1, num2) {
    return num1 + num2;
};
console.log(getSumm(5, 2));
// "?" - ne obligāta
var getName = function (firstName, lastName) {
    if (lastName == undefined) {
        return firstName;
    }
    return firstName + " " + lastName;
};
console.log(getName("John")); // lastName nav norādīta, jo nav obligāts
var getTask = function (todo) {
    console.log(todo.title + " " + todo.task + " " + todo.date);
};
// ENUM
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
