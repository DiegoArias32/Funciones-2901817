/*
 * Rectangulo Mayor
 * Autor: Diego De Jesus Arias Gonzalez
 * Fecha 3 de abril de 2024
 * version 1.0
 */

function rectanMayorParametro(baseUno, baseDos, alturaUno, alturaDos){
    let rectanUno = baseUno * alturaUno;
    let rectanDos = baseDos * alturaDos;

    if(rectanUno > rectanDos){
        return  "Rectangulo Uno es mayor: " +rectanUno;

    } else{
        return "Rectangulo Dos es mayor: " +rectanDos;

    }

}

const rectanMayorExpresion = function(bbaseUno, bbaseDos, balturaUno, balturaDos){
    let rectanUno = bbaseUno * balturaUno;
    let rectanDos = bbaseDos * balturaDos;

    if(rectanUno > rectanDos){
        return "Rectangulo Uno es mayor: " +rectanUno;
    } else{
        return "Rectangulo Dos es mayor: " +rectanDos;
    }

}