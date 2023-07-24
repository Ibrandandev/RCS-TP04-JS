// Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }
  imprimirDatos() {
    console.log(
      `Codigo: ${this.codigo} - Nombre: ${this.nombre} - Precio: ${this.precio}`
    );
  }
}

const productos = [];

for (let i = 0; i < 3; i++) {
  let codigo = prompt("Codigo del producto");
  let nombre = prompt("Nombre del producto");
  let precio = prompt("Precio del producto");
  productos.push(new Producto(codigo, nombre, precio));
}

productos.forEach((producto) => producto.imprimirDatos());
