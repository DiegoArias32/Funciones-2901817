/*
 * Tabla de multiplicar del 5
 * Autor: Diego De Jesus Arias Gonzalez
 * Fecha 3 de abril de 2024
 * version 1.0
 */

function tablaParametro(numero = 5, contador = 0, multiplicacion){

    while(contador < numero){
        contador = contador + 1
        multiplicacion = numero * contador
        console.log(numero+ " x " +contador+ " = "  +multiplicacion)
    }
    return  "Tabla terminada"
}

const tablaExpresion =function(bnumero = 5, bcontador = 0, bmultiplicacion){

    while(bcontador < bnumero){
        bcontador = bcontador + 1
        bmultiplicacion = bnumero * bcontador
        console.log(bnumero+ " x " +bcontador+ " = "  +bmultiplicacion)
    }
    return  "Tabla terminada"
}