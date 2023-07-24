// Nos piden realizar una agenda telefónica de contactos.

// Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

// Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

// Los métodos de la agenda serán los siguientes:

// agregarContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
// existeContacto(Contacto): indica si el contacto pasado existe o no.
// listarContactos(): Lista toda la agenda
// buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
// eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
// agendaLlena(): indica si la agenda está llena.
// huecosLibres(): indica cuántos contactos más podemos ingresar.

// Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.

document.body.style.backgroundColor = `#404040`;

class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }
  set setNombre(val) {
    this.nombre = val;
  }
  set setTelefono(val) {
    this.telefono = val;
  }
  get getNombre() {
    return this.nombre;
  }
  get getTelefono() {
    return this.telefono;
  }
}

class Agenda {
  constructor(tamanio = 10) {
    this.contactos = [
      { nombre: "Javier", telefono: 3858443233 },
      { nombre: "Stefania", telefono: 3858687963 },
      { nombre: "Malena", telefono: 3813470039 },
      { nombre: "Octavio", telefono: 3813470039 },
    ];
    this.tamanio = tamanio;
  }
  agregarContacto(newContacto) {
    if (!this.agendaLlena()) {
      if (this.existeContacto(newContacto) === -1) {
        this.contactos.push(newContacto);
        alert("Contacto Añadido");
        this.listarContactos();
      } else {
        console.log("El contacto ya existe en la agenda");
      }
    } else {
      console.log("La agenda esta llena");
    }
  }
  existeContacto(newContacto) {
    return this.contactos.findIndex(
      (contacto) => contacto.nombre === newContacto.nombre
    );
  }
  listarContactos() {
    if (this.contactos.length > 0) {
      this.contactos.forEach((contacto, i) => {
        console.log(`${i + 1} ${contacto.nombre} - ${contacto.telefono}`);
      });
    } else {
      console.log("Agenda Vacía");
    }
  }
  buscarContacto(nombre) {
    const data = this.contactos.filter((contacto) =>
      contacto.nombre.includes(nombre)
    );
    if (data) {
      data.forEach((contacto) => {
        console.log(`${contacto.nombre} - ${contacto.telefono}`);
      });
    } else {
      console.log("El contacto no se encuentra en la agenda");
    }
  }
  eliminarContacto(nombre) {
    const index = this.contactos.findIndex(
      (contacto) => contacto.nombre === nombre
    );
    if (index !== -1) {
      if (
        confirm(
          `Are you sure you want to delete this contact: ${this.contactos[index].nombre}`
        )
      ) {
        this.contactos.splice(index, 1);
        alert("Contacto deleted");
        this.listarContactos();
      }
    }
  }
  agendaLlena() {
    if (this.contactos.length === this.tamanio) {
      alert("La Agenda esta llena");
      return true;
    }
    return false;
  }
  huecosLibres() {
    const libres = this.tamanio - this.contactos.length;
    alert(`${libres > 0 ? `Queda ${libres} lugar/es` : "No queda lugar"}`);
  }
}

const agendaUno = new Agenda();

do {
  let option = parseInt(
    prompt(
      `1- Mostrar Contactos\n2- Agregar Contacto\n3- Buscar Contacto\n4- Eliminar Contacto`
    )
  );
  switch (option) {
    case 1:
      agendaUno.listarContactos();
      break;
    case 2:
      let newNombre = prompt("Ingrese nombre");
      let newTelefono = prompt("Ingrese telefono");
      agendaUno.agregarContacto(new Contacto(newNombre, newTelefono));
      break;
    case 3:
      let nombreABuscar = prompt("Ingrese nombre");
      agendaUno.buscarContacto(nombreABuscar);
      break;
    case 4:
      let nombreAEliminar = prompt("Ingrese nombre");
      agendaUno.eliminarContacto(nombreAEliminar);
      break;
    default:
      alert("Accion Invalida");
  }
} while (confirm("¿Desea realizar otra operación?"));
