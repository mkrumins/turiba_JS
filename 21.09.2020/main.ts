
class Car {
  public durvis: number;
  public nosaukums: string;
  public strada: boolean;

  constructor(inputs:number, inputs2:string) {
    this.durvis = inputs;
    this.nosaukums = inputs2;
    this.strada = true; 
  }
  public functionNew = () => {
    console.log("Hey!");
}

}

class Main {
  public main() {
    let objekts = new Car(4,"Audi");
    let objekt2 = new Car(3,"BMW");

  }
}

