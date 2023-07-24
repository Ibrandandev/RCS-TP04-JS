// Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
// mostrarDatos: devuelve toda la información del objeto.
// generaDNI(): genera un número aleatorio de 8 cifras.

class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, anioNac) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anioNac = anioNac;
  }
  mostrarGeneracion() {
    if (this.anioNac < 1930) return;
    if (1930 > this.anioNac && this.anioNac < 1948) {
      console.log("Pertenece a la Silent Generation");
      console.log("Su rasgo caracteristico es: La Austeridad");
    } else if (1949 > this.anioNac && this.anioNac < 1968) {
      console.log("Pertenece a la Baby Boom");
      console.log("Su rasgo caracteristico es: La Ambicion");
    } else if (1969 > this.anioNac && this.anioNac < 1980) {
      console.log("Pertenece a la Generacion X");
      console.log("Su rasgo caracteristico es: La obsesion por el exito");
    } else if (1981 > this.anioNac && this.anioNac < 2009) {
      console.log("Pertenece a la Generacion Y");
      console.log("Su rasgo caracteristico es: La Frustracion :(");
    } else {
      console.log("Pertenece a la Generacion Z");
      console.log("Su rasgo caracteristico es: La Irreverencia");
    }
  }
  esMayorDeEdad() {
    if (this.edad >= 18) {
      console.log("Es mayor de edad");
    } else {
      console.log("Es menor de Edad");
    }
  }
  mostrarDatos() {
    document.write(
      `Usted se llama ${this.nombre},  nacio en el año ${
        this.anioNac
      } y tiene ${this.edad} años. Su numero de Dni es ${
        this.dni
      }. Su sexo es ${this.sexo === "H" ? "Masculino" : "Femenino"} <br>`
    );
    document.write(`Sus medidas son: Pesa ${this.peso} y mide ${this.altura}`);
  }
  generaDni() {
    let dni = "";
    for (let i = 0; i < 8; i++) {
      const numRandom = Math.floor(Math.random() * 9 + 1);
      dni += numRandom;
    }
    this.dni = dni;
  }
}

const persona01 = new Persona("Ignacio", 19, 45229529, "H", 88, 1.9, 2004);
console.log(persona01);
