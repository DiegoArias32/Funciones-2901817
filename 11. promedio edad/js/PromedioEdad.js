/*
 * Promedio Edad
 * Autor: Diego De Jesus Arias Gonzalez
 * Fecha 3 de abril de 2024
 * version 1.0
 */

function promedioParametro(anioActual, anioNacimiento, anioNacimientoDos, anioNacimientoTres){
    let edadUno = anioActual - anioNacimiento
    let edadDos = anioActual - anioNacimientoDos
    let edadTres = anioActual - anioNacimientoTres

    let suma = parseInt(edadUno) + parseInt(edadDos) + parseInt(edadTres)

    let edadPromedio = suma / 3;

    if(edadUno > 17){
        mensajeUno = "El tiene " +edadUno+ " años y es mayor de edad";
    } else{
        mensajeUno = "El tiene " +edadUno+ " años y no es mayor de edad";
    }

    if(edadDos > 17){
        mensajeDos = "El tiene " +edadDos+ " años y es mayor de edad";
    } else{
        mensajeDos = "El tiene " +edadDos+ " años y no es mayor de edad";
    }


    if(edadTres > 17){
        mensajeTres = "El tiene " +edadTres+ " años y es mayor de edad";
    } else{
        mensajeTres = "El tiene " +edadTres+ " años y no es mayor de edad";
    }

    mensajeCuatro = "La suma de las edades es: " + suma;
    mensajeCinco = "El promedio de las tres edades es de: " + edadPromedio;

    return mensajeUno + "\n" + mensajeDos + "\n" + mensajeTres + "\n" + mensajeCuatro + "\n" + mensajeCinco;
}


const promedioExpresion =function(anioActual, banioNacimiento, banioNacimientoDos, banioNacimientoTres){
    let edadUno = anioActual - banioNacimiento
    let edadDos = anioActual - banioNacimientoDos
    let edadTres = anioActual - banioNacimientoTres

    let suma = parseInt(edadUno) + parseInt(edadDos) + parseInt(edadTres)

    let edadPromedio = suma / 3;


    if(edadUno > 17){
        mensajeUno = "El tiene " +edadUno+ " años y es mayor de edad";
    } else{
        mensajeUno = "El tiene " +edadUno+ " años y no es mayor de edad";
    }

    
    if(edadDos > 17){
        mensajeDos = "El tiene " +edadDos+ " años y es mayor de edad";
    } else{
        mensajeDos = "El tiene " +edadDos+ " años y no es mayor de edad";
    }

    if(edadTres > 17){
        mensajeTres = "El tiene " +edadTres+ " años y es mayor de edad";
    } else{
        mensajeTres = "El tiene " +edadTres+ " años y no es mayor de edad";
    }

    mensajeCuatro = "La suma de las edades es: " + suma;
    mensajeCinco = "El promedio de las tres edades es de: " + edadPromedio;

    return mensajeUno + "\n" + mensajeDos + "\n" + mensajeTres + "\n" + mensajeCuatro + "\n" + mensajeCinco;
}