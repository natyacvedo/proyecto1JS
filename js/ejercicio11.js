//Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

let numero12 = parseInt(prompt("Ingrese un numero"));
if (
  numero12 % 2 === 0 &&
  numero12 % 3 !== 0 &&
  numero12 % 5 !== 0 &&
  numero12 % 7 !== 0
) {
  document.write("El numero ingresado es divisible en 2 ");
} else if (
  numero12 % 2 === 0 &&
  numero12 % 3 === 0 &&
  numero12 % 5 !== 0 &&
  numero12 % 7 !== 0
) {
  document.write("El numero ingresado es divisible en 2 y en 3");
} else if (
  numero12 % 2 === 0 &&
  numero12 % 3 === 0 &&
  numero12 % 5 === 0 &&
  numero12 % 7 !== 0
) {
  document.write("El numero ingresado es divisible en 2, 3 y en 5");
} else if (
  numero12 % 2 === 0 &&
  numero12 % 3 !== 0 &&
  numero12 % 5 === 0 &&
  numero12 % 7 !== 0
) {
  document.write("El numero ingresado es divisible en 2 y en 5");
} else if (
  numero12 % 2 === 0 &&
  numero12 % 3 !== 0 &&
  numero12 % 5 !== 0 &&
  numero12 % 7 === 0
) {
  document.write("El numero ingresado es divisible en 2 y en 7");
} else if (
  numero12 % 2 === 0 &&
  numero12 % 3 !== 0 &&
  numero12 % 5 === 0 &&
  numero12 % 7 === 0
) {
  document.write("El numero ingresado es divisible en 2, 5  y en 7");
} else if (
  numero12 % 2 === 0 &&
  numero12 % 3 === 0 &&
  numero12 % 5 !== 0 &&
  numero12 % 7 === 0
) {
  document.write("El numero ingresado es divisible en 2, 3 y en 7");
} else if (
  numero12 % 2 === 0 &&
  numero12 % 3 === 0 &&
  numero12 % 5 === 0 &&
  numero12 % 7 === 0
) {
  document.write("El numero ingresado es divisible en 2, 3 , 5 y en 7");
} else if (
  numero12 % 2 !== 0 &&
  numero12 % 3 === 0 &&
  numero12 % 5 !== 0 &&
  numero12 % 7 !== 0
) {
  document.write("El numero ingresado es divisible  en 3");
} else if (
  numero12 % 2 !== 0 &&
  numero12 % 3 === 0 &&
  numero12 % 5 === 0 &&
  numero12 % 7 !== 0
) {
  document.write("El numero ingresado es divisible en 3 y en 5");
} else if (
  numero12 % 2 !== 0 &&
  numero12 % 3 === 0 &&
  numero12 % 5 === 0 &&
  numero12 % 7 === 0
) {
  document.write("El numero ingresado es divisible en 3 , 5 y en 7");
} else if (
  numero12 % 2 !== 0 &&
  numero12 % 3 !== 0 &&
  numero12 % 5 === 0 &&
  numero12 % 7 !== 0
) {
  document.write("El numero ingresado es divisible en 5");
} else if (
  numero12 % 2 !== 0 &&
  numero12 % 3 !== 0 &&
  numero12 % 5 === 0 &&
  numero12 % 7 === 0
) {
  document.write("El numero ingresado es divisible en 5 y en 7");
} else if (
  numero12 % 2 !== 0 &&
  numero12 % 3 !== 0 &&
  numero12 % 5 !== 0 &&
  numero12 % 7 === 0
) {
  document.write("El numero ingresado es divisible en 7");
} else {
  document.write("El numero ingresado NO es divisible en 2 , 3 , 5 ni 7");
}
