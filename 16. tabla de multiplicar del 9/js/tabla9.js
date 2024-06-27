/*
 * Tabla de multiplicar del 9
 * Autor: Diego De Jesus Arias Gonzalez
 * Fecha 3 de abril de 2024
 * version 1.0
 */


function tablaParametro(numero = 5, contador = 0, multiplicacion = 9, resultado){

    while(contador < numero){
        contador = contador + 1
        resultado = multiplicacion * contador
        if (resultado % 2 === 0) {
            console.log(multiplicacion+ " x " +contador+ " = "  +resultado + " (par)");
        } else {
            console.log(multiplicacion+ " x " +contador+ " = "  +resultado + " (impar)");
        }
    }
    return  "Tabla terminada"
}

const tablaExpresion =function(bnumero = 5, bcontador = 0, bmultiplicacion = 9, resultado){

    while(bcontador < bnumero){
        bcontador = bcontador + 1
        resultado = bmultiplicacion * bcontador
        if (resultado % 2 === 0) {
            console.log(bmultiplicacion+ " x " +bcontador+ " = "  +resultado + " (par)");
        } else {
            console.log(bmultiplicacion+ " x " +bcontador+ " = "  +resultado + " (impar)");
        }
    }
    return  "Tabla terminada"
}