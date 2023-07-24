// Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// Una propiedad titular con el valor "Alex".
// Una propiedad saldo, teniendo como valor inicial 0.
// Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// Un método extraer() que permita retirar la cantidad pasada como parámetro.
// Un método informar() que retorne la información del estado de la cuenta.

// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

// Rectángulos

class Cuenta {
  constructor(titular, saldo = 0) {
    this.titular = titular;
    this.saldo = saldo;
  }
  ingresar(cant) {
    if (cant > 0) {
      this.saldo += cant;
      this.informar();
    } else console.log("El monto debe ser mayor a 0");
  }
  extraer(cant) {
    if (this.saldo > cant) {
      this.saldo -= cant;
      this.informar();
    } else console.log("Fondos Insuficientes");
  }
  informar() {
    console.log(`El titular ${this.titular} tiene $${this.saldo} en su cuenta`);
  }
}

const cuenta01 = new Cuenta("Alex");

cuenta01.informar();
cuenta01.ingresar(100);
cuenta01.extraer(50);
