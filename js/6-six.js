// Crear una clase Libro que contenga al menos las siguientes propiedades:
// ISBN
// Título
// Autor
// Número de páginas

// Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

// “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
// Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
// Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

class Libro {
  constructor(isbn, titulo, autor, numPaginas) {
    this.isbn = isbn;
    this.titulo = titulo;
    this.autor = autor;
    this.numPaginas = numPaginas;
  }
  set setIsbn(val) {
    this.isbn = val;
  }
  set setTitulo(val) {
    this.titulo = val;
  }
  set setAutor(val) {
    this.autor = val;
  }
  set setNumPaginas(val) {
    this.numPaginas = val;
  }
  get getIsbn() {
    return this.isbn;
  }
  get getTitulo() {
    return this.titulo;
  }
  get getAutor() {
    return this.autor;
  }
  get getNumPaginas() {
    return this.numPaginas;
  }

  mostrarLibro() {
    console.log(`El libro ${this.getTitulo} con ISBN ${this.getIsbn} 
    creado por el autor ${this.getAutor} tiene páginas ${this.getNumPaginas}`);
  }
}

const libroUno = new Libro(123, "Clean Code", "Americano", 255);
const libroDos = new Libro(124, "Padre rico, padre pobre", "Chinardo", 250);

libroUno.mostrarLibro();
libroDos.mostrarLibro();

if (libroUno.getNumPaginas > libroDos.getNumPaginas) {
  console.log(`El libro Uno tiene más paginas que el libro Dos`);
} else if (libroUno.getNumPaginas < libroDos.getNumPaginas) {
  console.log(`El libro Dos tiene más paginas que el libro Uno`);
} else {
  console.log(`El libro Uno y Dos tienen el mismo numero de paginas`);
}
