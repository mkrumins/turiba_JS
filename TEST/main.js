var employees = /** @class */ (function () {
    function employees(p, w, bC, wa) {
        var _this = this;
        this.calculateBonus = function () {
            switch (_this.workExperience) {
                case 0:
                    _this.bonus = _this.wage;
                    console.log("dddddd");
                    break;
                case 1:
                    _this.bonus = _this.wage * bonusClass2.bClass1;
                    console.log("dddddd");
                    break;
                case 2:
                    _this.bonus = _this.wage * bonusClass2.bClass2;
                    console.log("dddddd");
                    break;
                case 3:
                    _this.bonus = _this.wage * bonusClass2.bClass3;
                    console.log("dddddd");
                    break;
                default:
                    _this.bonus = _this.wage;
            }
        };
        this.position = p;
        this.workExperience = w;
        this.bonusClass = bC;
        this.wage = wa;
        // this.bonus = b;
    }
    return employees;
}());
var bonusClass2;
(function (bonusClass2) {
    bonusClass2[bonusClass2["bClass0"] = 0] = "bClass0";
    bonusClass2[bonusClass2["bClass1"] = 1.5] = "bClass1";
    bonusClass2[bonusClass2["bClass2"] = 2] = "bClass2";
    bonusClass2[bonusClass2["bClass3"] = 2.5] = "bClass3";
})(bonusClass2 || (bonusClass2 = {}));
var displayResults = new employees("Project maneger", 2, bonusClass2.bClass2, 500);
// ------------------ Ternary Operator 
// if else as >> ? and : 
// 
var isLocked = false;
isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');
// same as
if (isLocked) {
    console.log('You will need a key to open the door.');
}
else {
    console.log('You will not need a key to open the door.');
}
// ------------------ Truthy and Falsy Assignment
var tool = 'marker';
// Use short circuit evaluation to assign  writingUtensil variable below:
// if writingUtensil = tool then tool="marker", else "pen"
var writingUtensil = tool || "pen";
console.log("The " + writingUtensil + " is mightier than the sword.");
// ----------------- Default Parameters
function makeShoppingList(item1, item2, item3) {
    if (item1 === void 0) { item1 = "milk"; }
    if (item2 === void 0) { item2 = "bread"; }
    if (item3 === void 0) { item3 = "eggs"; }
    console.log("Remember to buy " + item1);
    console.log("Remember to buy " + item2);
    console.log("Remember to buy " + item3);
}
makeShoppingList();
makeShoppingList("chicken", "icecream", "pattatoe");
