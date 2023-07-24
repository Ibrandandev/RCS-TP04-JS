// Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
  set setAlto(newValue) {
    this.alto = newValue;
  }
  set setAncho(newValue) {
    this.ancho = newValue;
  }
  get getAlto() {
    return this.alto;
  }
  get getAncho() {
    return this.ancho;
  }
  calcularPerimetro() {
    console.log(
      `El perimetro del rectangulo es: ${2 * (this.getAlto + this.getAncho)}`
    );
  }
  calcularArea() {
    console.log(`El area del rectangulo es: ${this.getAlto * this.getAncho}`);
  }
}

const rectangulo = new Rectangulo(100, 200);
