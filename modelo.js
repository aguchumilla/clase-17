/**
 * autor: Agustin Chumilla
 * version: 1.0
 * fecha: 02/05/24
 * El siguiente script modelo sirve a index.html y genera el molde principal
 * luego será adaptado a los personajes particulares en el archivo instancias.js
 * En este archivo estaremos dando las caracteristicas genéricas comunes a 
 * todos los objetos que crearemos en el futuro
 */

// 1 - Se define un objeto mediante una función constructora
function Simpson(nombre, edad, peso, esCalvo, fraseFavorita) {
    // Atributos de clase, inicialización de variables del objeto, para que se sepa que son artibutos hay que escribirlo asi
    this.nombre = nombre;
    this.edad = edad;
    this.peso = peso;
    this.esCalvo = esCalvo;
    this.fraseFavorita = fraseFavorita;

    // this. indica que el método será propiedad del objeto nuevo, que se creará en el otro archivo
    // Estos métodos se llaman anónimos

    // Método para obtener la foto (funciones dentro de una variable, como lo visto en flecha)
    this.obtenerFoto = function () {
        document.write(`<div class="container">`);
        document.write(`<img src="./assets/${this.nombre.toLowerCase()}.png" alt="${this.nombre}" >`)
    }

    // Método para obtener el nombre
    this.obtenerNombre = function () {
        document.write(`<p>Nombre: ${this.nombre}</p>`); // Fuera del signo $ {} se interpreta como cadena de texto.
    }

    // Método para obtener la edad
    this.obtenerEdad = function () {
        document.write(`<p>Edad: ${this.edad} años</p>`);
    }

    // Método para obtener el peso
    this.obtenerPeso = function () {
        document.write(`<p>Peso: ${this.peso} kg</p>`);
    }

    // Método para obtener si es calvo
    this.obtenerEsCalvo = function () {
        if (this.esCalvo) {
            document.write(`<p>Es calvo: Si</p>`);
        } else {
            document.write(`<p>Es calvo: No</p>`);
        }
    
        // Con ternario seria asi
        // this.esPelado = () => {
        //     document.write(`<p>Es calvo: ${this.esCalvo ? "Si" : "No" }</p>`)
        // }
         
    }
    // Método para obtener frase favorita
    this.obtenerFraseFavorita = function () {
        document.write(`<p>Frase favorita de ${this.nombre}: ${this.fraseFavorita}</p>`);
        document.write('</div>');
    }
} 


class Simpsons {
    constructor(nombre, edad, peso){
        this.nombre = nombre;
        this.edad = edad;
        this.peso = peso;
    }

    // metodo para obtener foto 
    obtenerFoto(){
        document.write();
    }

}