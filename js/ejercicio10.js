//Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)


let numero10 = parseInt(prompt("Ingrese un numero"));
console.log(numero10)

if(numero10 % 2 ==0 && numero10 % 3 ==0 && numero10 % 5 ==0 && numero10 % 7 ==0){
    document.write("El numero ingresado es divisible por 2 ,3 ,5 o 7")
}else{
    document.write("El numero ingresado no es divisible por 2 ,3 ,5 o 7")
}