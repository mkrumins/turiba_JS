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
console.log("dddddd");
var bonusClass2;
(function (bonusClass2) {
    bonusClass2[bonusClass2["bClass0"] = 0] = "bClass0";
    bonusClass2[bonusClass2["bClass1"] = 1.5] = "bClass1";
    bonusClass2[bonusClass2["bClass2"] = 2] = "bClass2";
    bonusClass2[bonusClass2["bClass3"] = 2.5] = "bClass3";
})(bonusClass2 || (bonusClass2 = {}));
var displayResults = new employees("Project maneger", 2, bonusClass2.bClass2, 500);
console.log("ewewew");
