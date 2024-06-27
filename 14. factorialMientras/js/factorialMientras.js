/*
 * Factorial mientras
 * Autor: Diego De Jesus Arias Gonzalez
 * Fecha 3 de abril de 2024
 * version 1.0
 */
function factorialMientrasParametro(numero = 5, contar = 0, factorial = 1) {


    while(contar < numero) {
        contar= contar + 1;
        factorial = factorial * contar
        console.log(contar+ " = " +factorial)
    }
    return "Factorial Mientras";
}

const factorialMientrasExpresion =function(bnumero = 5, bcontar = 0, bfactorial = 1) {

    while(bcontar < bnumero) {
        bcontar= bcontar + 1;
        bfactorial = bfactorial * bcontar
        console.log(bcontar+ " = " +bfactorial)
    }
    return "Factorial Mientras";
}
