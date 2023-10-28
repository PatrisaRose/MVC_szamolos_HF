class View {

  constructor() {

    $(".gomb").on("click", ()=>{
      this.#esemenyTrigger("adatokFeldolgozasa")
  })
  }

  getElsoSzam() {
    this.elsoSzam = parseInt($(".elsoSzam").val());
    return this.elsoSzam;
  }

  getMasodikSzam() {
    this.masodikSzam = parseInt($(".masodikSzam").val());
    return this.masodikSzam;
  }
  eredmenyKiiras(osszeg) {
    $(".eredmeny").html("Az eredmény: " + osszeg);
  }


#esemenyTrigger(clickEsemeny){
  const esemenyem = new CustomEvent(clickEsemeny, {detail: this})
  window.dispatchEvent(esemenyem)
}

}





export default View;
