import Server from "./models/server.js";

const server = new Server();

server.listen();

// class Estudiante {
//   constructor(nombre, edad, comision) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.comision = comision;
//   }

//   listar() {
//     console.log(`Nombre: ${this.nombre}`);
//     console.log(`Comisión: ${this.comision}`);
//   }
// }

// const estudiante1 = new Estudiante("Pablo Marino", 42, "web5");
// const estudiante2 = new Estudiante("José Simón", 23, "web5");

// estudiante1.listar();
// estudiante2.listar();
