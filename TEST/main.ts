class employees {
  position: string;
  workExperience: number;
  bonusClass: number;
  wage: number;
  bonus: number;

  constructor(p: string, w: number, bC: number, wa: number) {
    this.position = p;
    this.workExperience = w;
    this.bonusClass = bC;
    this.wage = wa;
    // this.bonus = b;
  }

  calculateBonus = () => {
    switch (this.workExperience) {
      case 0:
        this.bonus = this.wage;
        console.log("dddddd");
        break;
      case 1:
        this.bonus = this.wage * bonusClass2.bClass1;
        console.log("dddddd");
        break;
      case 2:
        this.bonus = this.wage * bonusClass2.bClass2
        console.log("dddddd");
        break;
      case 3:
        this.bonus = this.wage * bonusClass2.bClass3
        console.log("dddddd");
        break;
      default:
        this.bonus = this.wage;
    }
  }

}

enum bonusClass2 {
  bClass0 = 0,
  bClass1 = 1.5,
  bClass2 = 2.0,
  bClass3 = 2.5
}


let displayResults = new employees("Project maneger", 2, bonusClass2.bClass2, 500);

// ------------------ Ternary Operator 
// if else as >> ? and : 
// 

let isLocked = false;
isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

// same as

if (isLocked) {
  console.log('You will need a key to open the door.');
} else {
  console.log('You will not need a key to open the door.');
}

// ------------------ Truthy and Falsy Assignment

let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
// if writingUtensil = tool then tool="marker", else "pen"
let writingUtensil = tool || "pen";

console.log(`The ${writingUtensil} is mightier than the sword.`);

// ----------------- Default Parameters

function makeShoppingList(item1:string = "milk", item2:string = "bread", item3:string = "eggs"){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

makeShoppingList() // paņems noklusētos
makeShoppingList("chicken","icecream","potato") // parādīs aktuālos




