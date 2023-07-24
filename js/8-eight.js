// Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".

class Persona {
  constructor(nombre, edad, profesion) {
    this.nombre = nombre;
    this.edad = edad;
    this.profesion = profesion;
  }
  saludar() {
    console.log(`Hola ${this.nombre}`);
  }
  despedirse() {
    console.log(`Chau ${this.nombre}`);
  }
}

const personaUno = new Persona("Ignacio", 19, "Programador");
const personaDos = new Persona("Lionel", 36, "Futbolista");

personaUno.despedirse();
personaDos.saludar();
