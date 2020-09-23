var main = function () {
    var nekustamais = /** @class */ (function () {
        function nekustamais(nr, adr, pls, kdrNr, stat) {
            var _this = this;
            this.printAdr = function () {
                console.log("Nekustamais īpašums atrodas: " + _this.majasAdrese + _this.majasNumurs + ", " + _this.pilseta + ". " + "Ar kadastra numuru: " + _this.kadastraNr);
            };
            this.printStatus = function () {
                if (_this.grausts)
                    console.log("Nekustamais īpašums ar kadastra Nr.: " + _this.kadastraNr + " nav apdzīvojams");
            };
            this.pilseta = pls;
            this.majasAdrese = adr;
            this.majasNumurs = nr;
            this.kadastraNr = kdrNr;
            this.grausts = stat;
        }
        return nekustamais;
    }());
    var barona = new nekustamais(11, "Barona ielā ", "Rīga", 443453, false);
    var brivibas = new nekustamais(11, "Brīvības ielā ", "Ogre", 563433, false);
    var rigas = new nekustamais(11, "Rīgas ielā ", "Cēsis", 883433, true);
    barona.printAdr();
    brivibas.printAdr();
    rigas.printAdr();
    barona.printStatus();
    brivibas.printStatus();
    rigas.printStatus();
};
