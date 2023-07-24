// Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

// Output:

// objeto.encender();
// objeto.apadar()
// auto encendido
// El auto se apagó

class Auto {
  constructor(color, marca, modelo, encendido = false) {
    this.color = color;
    this.marca = marca;
    this.modelo = modelo;
    this.encendido = encendido;
  }
  encender() {
    if (!this.encendido) this.encendido = true;
    console.log("El auto esta encendido");
  }
  apagar() {
    if (this.encendido) this.encendido = false;
    console.log("El auto esta apagado");
  }
}

const aventador = new Auto("Amarillo", "Lamborghini", "Aventador");

console.log(aventador);
aventador.encender();
console.log(aventador);
aventador.apagar();
console.log(aventador);
