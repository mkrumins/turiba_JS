let main = () => {
  class nekustamais {
    public majasNumurs: number;
    public majasAdrese: string;
    public pilseta: string;
    public kadastraNr: number;
    public grausts: boolean;

    constructor(nr: number, adr: string, pls: string, kdrNr: number, stat: boolean) {
      this.pilseta = pls;
      this.majasAdrese = adr;
      this.majasNumurs = nr;
      this.kadastraNr = kdrNr;
      this.grausts = stat;
    }

    public printAdr = () => {
      console.log("Nekustamais īpašums atrodas: " + this.majasAdrese + this.majasNumurs + ", " + this.pilseta + ". " + "Ar kadastra numuru: " + this.kadastraNr);
    }
    public printStatus = () => {
      if (this.grausts)
        console.log("Nekustamais īpašums ar kadastra Nr.: " + this.kadastraNr + " nav apdzīvojams");
    }
  }

  let barona = new nekustamais(11, "Barona ielā ", "Rīga", 443453, false);
  let brivibas = new nekustamais(11, "Brīvības ielā ", "Ogre", 563433, false);
  let rigas = new nekustamais(11, "Rīgas ielā ", "Cēsis", 883433, true);

  barona.printAdr();
  brivibas.printAdr();
  rigas.printAdr();

  barona.printStatus();
  brivibas.printStatus();
  rigas.printStatus();
}

