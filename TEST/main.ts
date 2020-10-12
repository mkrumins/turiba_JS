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


let displayResults = new employees ("Project maneger", 2, bonusClass2.bClass2, 500);

