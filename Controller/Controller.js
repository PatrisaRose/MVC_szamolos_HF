import Model from "../Modell/Modell.js";
import View from "../View/View.js";

class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View();

    $(window).on("adatokFeldolgozasa", () => {
      let elsoSzam = this.view.getElsoSzam();
      let masodikSzam = this.view.getMasodikSzam();
      let osszeg = this.model.Szamok(elsoSzam, masodikSzam);
      this.view.eredmenyKiiras(osszeg);
    });
  }
}

export default Controller;
