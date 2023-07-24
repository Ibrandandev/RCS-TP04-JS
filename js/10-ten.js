// crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.
// Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje que indique que el avión está lleno.

// Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.

class Pasajero {
  constructor(nombre, edad, acompañante) {
    this.nombre = nombre;
    this.edad = edad;
    this.acompañante = acompañante;
  }
}

class Avion {
  constructor(nombre, capacidad, destino) {
    this.nombre = nombre;
    this.capacidad = capacidad;
    this.destino = destino;
    this.pasajeros = [];
  }
  abordar(newPassenger) {
    if (this.pasajeros.length < this.capacidad) {
      if (newPassenger.edad >= 18 || newPassenger.acompañante) {
        this.pasajeros.push(newPassenger);
        alert("Puede Subir al avión");
      } else {
        alert("Al ser menor de edad necesita un acompañante");
      }
    } else {
      alert("El avion esta lleno");
    }
  }
}

class Aeropuerto {
  constructor(nombre) {
    this.nombre = nombre;
    this.aviones = [];
  }
  agregarAvion(newAvion) {
    this.aviones.push(newAvion);
    this.listarAviones();
  }
  listarAviones() {
    if (this.aviones.length > 0) {
      console.clear();
      this.aviones.forEach((avion) => {
        console.log(
          `Nombre: ${avion.nombre} - Capacidad: ${avion.capacidad} - Destino: ${avion.destino}`
        );
        if (avion.pasajeros.length > 0) {
          console.log("Pasajeros");
          avion.pasajeros.forEach((pasajero) => {
            console.log(`Nombre: ${pasajero.nombre} - Edad ${pasajero.edad}`);
          });
        }
      });
    } else {
      console.log("no hay aviones listados");
    }
  }
  buscarAvion(avionToSearch) {
    const result = this.aviones.filter((avion) =>
      avion.nombre.includes(avionToSearch)
    );
    if (result.length > 0) {
      result.forEach((avion) => {
        console.log(
          `Nombre: ${avion.nombre} - Capacidad: ${avion.capacidad} - Destino: ${avion.destino} - Cantidad de pasajeros: ${avion.pasajeros.length}`
        );
      });
    } else {
      console.log("Avion no encontrado");
    }
  }
}

const avionUno = new Avion("Boeing 742", 3, "Miami, Estados Unidos");

const aeropuertoUno = new Aeropuerto("Aeropuerto Internacional");

aeropuertoUno.agregarAvion(avionUno);

// for (let i = 0; i < 5; i++) {
//   let newName = prompt("Nombre del pasajero");
//   let newAge = parseInt(prompt("Edad del pasajero"));
//   let acompañante = false;
//   if (newAge < 18) {
//     acompañante = confirm("Va con un acompañante");
//   }
//   avionUno.abordar(new Pasajero(newName, newAge, acompañante));
// }
