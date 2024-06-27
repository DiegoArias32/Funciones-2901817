/*
 * Edad
 * Autor: Diego De Jesus Arias Gonzalez
 * Fecha 31 de marzo de 2024
 * version 1.0
 */

function edadParametro(banioActual, banioNacimiento){
    let anioActual = banioActual
    let anioNacimiento = banioNacimiento
    let edad = anioActual - anioNacimiento;
    if (edad < 0) {
        return `La persona aún no ha nacido.`;
    } else {
        return `La persona tiene ${edad} años.`;
    }
}

const edadExpresion = function(canioActual, canioNacimiento){
    let anioActual = canioActual
    let anioNacimiento = canioNacimiento
    let edad = anioActual - anioNacimiento;
    if (edad < 0) {
        return `La persona aún no ha nacido.`;
    } else {
        return `La persona tiene ${edad} años.`;
    }
}



