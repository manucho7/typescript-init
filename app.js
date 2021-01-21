"use strict";
//ALGO DE BOOLEANS
// let day: string = 'friday';
//Objetos basicos basados en el type Heroe
var flash = {
    nombre: "Barry Allen",
    edad: 24,
    poderes: ["puede correr muy rapido", "viajar por el tiempo"],
    getNombre: function () {
        return this.nombre;
    }
};
var superman = {
    nombre: "Clark Kent",
    edad: 500,
    poderes: ["puede correr muy rapido", "volar"],
    getNombre: function () {
        return this.nombre;
    }
};
console.log(flash);
console.log(superman);
