/*
 * Contar mientras
 * Autor: Diego De Jesus Arias Gonzalez
 * Fecha 3 de abril de 2024
 * version 1.0
 */

function contarParametro(numero = 5, contar = 0) {
            while(contar < numero) {
                contar= contar + 1;
                console.log(contar)
            }
            return "Fin contar"
        }


const contarExpresion =function(bnumero = 5, bcontar = 0) {

                while(bcontar < bnumero) {
                    bcontar= bcontar + 1;
                    console.log(bcontar)
                }
                return "Fin contar"
            }