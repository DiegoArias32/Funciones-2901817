/*
 * Tabla del 9 Para
 * Autor: Diego De Jesus Arias Gonzalez
 * Fecha 4 de abril de 2024
 * version 1.0
 */

function tablaParametro(numero = 5, contador, multiplicacion = 9, resultado, esPar){

    for (contador = 1; contador <= numero; contador++) {
                resultado = multiplicacion * contador;
        if (contador % 2 == 0) {
            esPar = "Es par";
        } else {
            esPar = "Es impar";
        }

        console.log(multiplicacion+ " x " +contador+ " = " +resultado+ " -> " +esPar);
    }
    return "Final de la tabla del 9"
}


const tablaExpresion = function(numero = 5, contador, multiplicacion = 9, resultado, esPar){

    for (contador = 1; contador <= numero; contador++) {
                resultado = multiplicacion * contador;
        if (contador % 2 == 0) {
            esPar = "Es par";
        } else {
            esPar = "Es impar";
        }

        console.log(multiplicacion+ " x " +contador+ " = " +resultado+ " -> " +esPar);
    }
    return "Final de la tabla del 9"
}