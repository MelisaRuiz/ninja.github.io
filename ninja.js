const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();

class Ninja {
    constructor(nombre) {
      this.nombre = nombre;
      this.salud = 0;
      this.velocidad = 3;
      this.fuerza = 3;
    }

    sayName() {
      console.log(`Me llamo ${this.nombre}!`);
    }
  
    showStats() {
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Fuerza: ${this.fuerza}`);
      console.log(`Velocidad: ${this.velocidad}`);
      console.log(`Salud: ${this.salud}`);
    }
  
    drinkSake() {
      this.salud += 10;
    }
  }
