/*
 * Salario
 * Autor: Diego De Jesus Arias Gonzalez
 * Fecha 3 de abril de 2024
 * version 1.0
 */

function salarioParametro(salarioMinimo, auxilioTransporte, pagoTotal, deducciones){

    salarioMinimo = 1300000;
    auxilioTransporte = 162000;
    pagoTotal = 0;
    deducciones = 0;

    salarioTotal = diasTrabajados * valorDia;

    if (salarioTotal > 2 * salarioMinimo) {
        pagoTotal = salarioTotal + auxilioTransporte;
    } else {
        pagoTotal = salarioTotal;
    }

    if (salarioTotal > 4 * salarioMinimo) {
        deducciones = salarioTotal * 0.18;
        deducciones = salarioTotal * 0.04;
    } else {
        deducciones = salarioTotal * 0.12;
}

    let salud;
    let pension;
    let arl;

    salud = salarioTotal * 0.12;
    pension = salarioTotal * 0.16;
    arl = salarioTotal * 0.052;
    deducciones = salud + pension + arl;


    let salarioTotalNeto = pagoTotal - deducciones;


    let retencion = 0;
    if (salarioTotalNeto > 4 * salarioMinimo) {
        retencion = salarioTotal * 0.04;
}
    let salarioTotalNetoConRetencion = salarioTotalNeto - retencion;

 
    console.log("Dias trabajado: " +diasTrabajados);
    console.log("Valor del día: " +valorDia+ " COP");
    console.log("Salario total: " +pagoTotal+ " COP");
    if (salarioTotal > 2 * salarioMinimo) {
    console.log("Subsidio de transporte: " +auxilioTransporte+ " COP");
    } else {
    console.log(`Subsidio de transporte: 0`);
}
    console.log("Deducciones: " +deducciones+ " COP");
    console.log("Salud: " +salud+ " COP");
    console.log("Pension: " +pension+ " COP");
    console.log("ARL:" +arl+ " COP");

    if (salarioTotal * 4 >  salarioMinimo) {
        console.log("Retención del 0.04: " +retencion+  " COP");
    } else {
        console.log(`Retención del 0.04: 0`);
}
console.log(`Salario total neto: ${(salarioTotalNetoConRetencion + 
    (salarioTotal > 2 * salarioMinimo ? auxilioTransporte : 0)).toFixed(2)}`);

return "SALARIO TERMINADOOOOO"
}


// a
const salarioExpresion = function(salarioMinimo, auxilioTransporte, pagoTotal, deducciones){

    salarioMinimo = 1300000;
    auxilioTransporte = 162000;
    pagoTotal = 0;
    deducciones = 0;

    salarioTotal = diasTrabajados * valorDia;

    if (salarioTotal > 2 * salarioMinimo) {
        pagoTotal = salarioTotal + auxilioTransporte;
    } else {
        pagoTotal = salarioTotal;
    }

    if (salarioTotal > 4 * salarioMinimo) {
        deducciones = salarioTotal * 0.18;
        deducciones = salarioTotal * 0.04;
    } else {
        deducciones = salarioTotal * 0.12;
}

    let salud;
    let pension;
    let arl;

    salud = salarioTotal * 0.12;
    pension = salarioTotal * 0.16;
    arl = salarioTotal * 0.052;
    deducciones = salud + pension + arl;


    let salarioTotalNeto = pagoTotal - deducciones;


    let retencion = 0;
    if (salarioTotalNeto > 4 * salarioMinimo) {
        retencion = salarioTotal * 0.04;
}
    let salarioTotalNetoConRetencion = salarioTotalNeto - retencion;


    console.log("Dias trabajado: " +diasTrabajados);
    console.log("Valor del día: " +valorDia+ " COP");
    console.log("Salario total: " +pagoTotal+ " COP");
    if (salarioTotal > 2 * salarioMinimo) {
    console.log("Subsidio de transporte: " +auxilioTransporte+ " COP");
    } else {
    console.log(`Subsidio de transporte: 0`);
}
    console.log("Deducciones: " +deducciones+ " COP");
    console.log("Salud: " +salud+ " COP");
    console.log("Pension: " +pension+ " COP");
    console.log("ARL:" +arl+ " COP");

    if (salarioTotal * 4 >  salarioMinimo) {
        console.log("Retención del 0.04: " +retencion+  " COP");
    } else {
        console.log(`Retención del 0.04: 0`);
}
console.log(`Salario total neto: ${(salarioTotalNetoConRetencion + (salarioTotal > 2 * salarioMinimo ? auxilioTransporte : 0)).toFixed(2)}`);

return "SALARIO TERMINADOOOOO"

}