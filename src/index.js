/*let nombres = "Tadeo Gaviria";
var edades = 20;
const cualquiercosa = 30;
let activo = true;
let variablenula = null;
let indefinido;
//cualquiercosa = "Alvaro";

console.log(nombres);
console.log(edades);
console.log(cualquiercosa);

console.log(typeof activo);
console.log(typeof variablenula);
console.log(typeof indefinido);

console.log(10 + 5);

console.log(10 == "10");
console.log(10 === "10");

let mensaje = edades >= 20 ? "Mayor de edad" : "Menor de edad";
console.log(mensaje);

function saludar(nombre) {
  //console.log(`Hola ${nombre}`);
  return "Hola " + nombre;
}

function golpear(nombres) {
  return "puño para "+ nombres;
}

console.log(saludar(nombres));
console.log(golpear(nombres));

const sumar = (a, b) => a + b;

console.log(sumar(500, 200));

let frutas = ["Manzana", "Banano", "Pera"];

console.log(frutas);

frutas.push("Naranja");
frutas.push("Guanabana");
frutas.push("Fresa");

console.log(frutas);

frutas.pop();

console.log(frutas);

console.log(frutas.length);

//let filtrar = frutas.filter((f) => f.startsWith("M"));
let filtrar = frutas.filter((f) => f.endsWith("a"));
console.log(filtrar);

let personas = [];
let persona = {
  nombre: "Tadeo",
  edad: 20,
  saludar: function () {
    console.log(`Hola ${this.nombre}, edad ${this.edad}`); // Usar this.nombre y this.edad
  },
};

personas.push({
  nombre: "Tadeo",
});

console.log(personas);

persona.saludar(); 

persona.nombre = "Tadeo Gaviria";

console.log(persona);

const { nombre, edad } = persona;

console.log(persona.nombre);
console.log(nombre);*/


// function esperar() {
//   return new Promise((resolver) => {
//     setTimeout(() => {
//       resolver("Hecho");
//     }, 2000);
//   });
// }

// async function ejecutar() {
//   console.log("Esperando...");
//   let resultado = await esperar();
//   console.log(resultado);
// }

// ejecutar();
// let elemento = document.getElementById("boton");
// console.log(elemento);

// elemento.addEventListener("click", () => {
//   alert("Hola mundo!!!");
// });

/*fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
*/

// async function llamarapi() {
//   try {
//     let respuesta = await fetch(
//       "https://jsonplaceholder.typicode.com/posts"
//     ).then((response) => response.json());
//     console.log(respuesta);
//   } catch (error) {
//     console.log("Error al obtener los datos" + error);
//   }
// }

// class Animal {
//   constructor(nombre) {
//     this.nombre = nombre;
//   }

//   hacerSonido() {
//     console.log(this.nombre + " hace sonido");
//   }
// }

// let perro = new Animal("Gato");
// perro.hacerSonido();

// localStorage.setItem("usuario", "Juan");
// console.log(localStorage.getItem("usuario"));

function obtenerNumeros() {
  const num1 = parseFloat(document.getElementById("numero1").value);
  const num2 = parseFloat(document.getElementById("numero2").value);
  return { num1, num2 };
}


function mostrarResultado(resultado) {
  document.getElementById("resultado").textContent = resultado;
}


function limpiarCampos() {
  document.getElementById("numero1").value = "";
  document.getElementById("numero2").value = "";
  mostrarResultado("");
}


function calcular() {
  const { num1, num2 } = obtenerNumeros();
  const operacion = document.getElementById("operacion").value;

  let resultado;
  switch (operacion) {
      case "sumar":
          resultado = num1 + num2;
          break;
      case "restar":
          resultado = num1 - num2;
          break;
      case "multiplicar":
          resultado = num1 * num2;
          break;
      case "dividir":
          resultado = num2 !== 0 ? num1 / num2 : "Error: División por cero";
          break;
      default:
          resultado = "Operación no válida";
  }

  mostrarResultado(resultado);
}


document.getElementById("calcular").addEventListener("click", calcular);


document.getElementById("limpiar").addEventListener("click", limpiarCampos);