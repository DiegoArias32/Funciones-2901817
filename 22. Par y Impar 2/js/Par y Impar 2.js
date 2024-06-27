/*
 * Tabla del 5 Par y Impar
 * Autor: Diego De Jesus Arias Gonzalez
 * Fecha 4 de abril de 2024
 * version 1.0
 */


function parParametro(tabla, multi, resul, par = 0, impar = 0, numero = 5){

    for(tabla = 1; tabla  <= numero; tabla++){

        for(multi = 1; multi <= numero; multi++){

            resul = tabla * multi

            if (resul % 2 == 0) {

                console.log(tabla+ " x " +multi+ " = " +resul+ " buzz");

                par = par + 1;
            } else {

                console.log(tabla+ " x " +multi+ " = " +resul+ " bass");

                impar = impar + 1
            }
        }
    }


    console.log("hay " +par+ " pares")
    console.log("hay " +impar+ " impares")
    return "Final de la tabla"
}




const parExpresion = function(tabla, multi, resul, par = 0, impar = 0, numero = 5){

    for(tabla = 1; tabla  <= numero; tabla++){

        for(multi = 1; multi <= numero; multi++){

            resul = tabla * multi

            if (resul % 2 == 0) {

                console.log(tabla+ " x " +multi+ " = " +resul+ " buzz");

                par = par + 1;
            } else {

                console.log(tabla+ " x " +multi+ " = " +resul+ " bass");

                impar = impar + 1
            }
        }
    }


    console.log("hay " +par+ " pares")
    console.log("hay " +impar+ " impares")
    return "Final de la tabla"
}