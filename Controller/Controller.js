import Model from "../Modell/Modell.js";
import View from "../View/View.js";

class Controller {
    constructor() {
      this.model = new Model();
      this.view = new View();
      $(".gomb").click(() => {
        let elsoSzam = parseInt($(".elsoSzam").val());
        let masodikSzam = parseInt($(".masodikSzam").val());
        let osszeg = this.model.Szamok(elsoSzam, masodikSzam);
        this.view.eredmenyKiiras(osszeg);
      });
    }
  }
  
  export default Controller;

