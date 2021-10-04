//Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

let numero1 = parseInt(prompt("Ingrese un primer numero"));
let numero2 = parseInt(prompt("Ingrese un segundo numero"));

console.log(numero1);
console.log(numero2);


if (numero1 > numero2 ) {
  document.write("El primer numero ingresado es mayor - " + numero1);
} else if (numero2 > numero1) {
  document.write("El segundo numero ingresado es mayor - " + numero2);
} else if (numero1 == numero2 ) {
  document.write("Todos los numeros son iguales -" + numero2);
}
