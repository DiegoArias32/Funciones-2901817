/*
 * Tabla del 5 Para
 * Autor: Diego De Jesus Arias Gonzalez
 * Fecha 4 de abril de 2024
 * version 1.0
 */


function multiParametro(numero = 5, contador, multi = 1){


        for (contador = 1; contador  <= numero; contador++) {
            multi = numero * contador;
            console.log(numero+ " x " +contador+ " = " + multi);
        }
        return "Fin de la tabla de multiplicar"
    }


const multiExpresion = function(numero = 5, contador, multi = 1){


        for (contador = 1; contador  <= numero; contador++) {
            multi = numero * contador;
            console.log(numero+ " x " +contador+ " = " + multi);
        }
        return "Fin de la tabla de multiplicar"
    }