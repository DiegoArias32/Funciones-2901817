/*
 * Tabla de multiplicar del 1 al 5
 * Autor: Diego De Jesus Arias Gonzalez
 * Fecha 3 de abril de 2024
 * version 1.0
 */


function tablaParametro(resultado, tabla, contPar = 0, 
    contImpar = 0, contador = 1, numero = 5, multiplicacion = 1){

        while(contador <= numero){

            for(tabla = 1; tabla <= numero; tabla++){

                resultado = contador * multiplicacion;
                

                if (resultado % 2 === 0) {

                    console.log(contador+ " x " +tabla+ " = " +resultado+ " (Buzz) ");
                    contPar++;
                } else {

                    console.log(contador+ " x " +tabla+ " = " +resultado+ " (bass) ");
                    contImpar++;
                }

                multiplicacion++;
            }

            contador++;
            multiplicacion = 1;
        }

        console.log("Cantidad de buzz: " + contPar);
        console.log("Cantidad de bass: " + contImpar);

        return "Final de la tabla :D"
    }


const tablaExpresion =function(resultado, tabla, contPar = 0, 
    contImpar = 0, contador = 1, numero = 5, multiplicacion = 1){



        while(contador <= numero){

            for(tabla = 1; tabla <= numero; tabla++){

                resultado = contador * multiplicacion;
                

                if (resultado % 2 === 0) {

                    console.log(contador+ " x " +tabla+ " = " +resultado+ " (Buzz) ");
                    contPar++;
                } else {

                    console.log(contador+ " x " +tabla+ " = " +resultado+ " (bass) ");
                    contImpar++;
                }

                multiplicacion++;
            }

            contador++;
            multiplicacion = 1;
        }

        console.log("Cantidad de buzz: " + contPar);
        console.log("Cantidad de bass: " + contImpar);

        return "Final de la tabla :D"
    }