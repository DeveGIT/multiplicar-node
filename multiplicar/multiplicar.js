/** */
// requireds
const fs = require('fs');
const colors = require('colors');


let data = '';

let crearArchivo = async(base, limite) => {

    if (!Number(base)) {
        throw new Error(`El dato ingresado '${ base }' no es un número`);
    }

    for (let i = 1; i <= limite; i++) {

        data += `${ base } * ${ i } = ${ base * i }\n`;
    }

    fs.writeFile(`tablas/tabla-del-${ base }-al-${ limite }.txt`, data, (err) => {
        if (err) throw err;
        console.log(`La tabla del ${ base } ha sido creado`);
    });

    return `tabla de multiplicar del ${ base } y límite ${ limite }`;
};


let listarTabla = async(base, limite) => {

    console.log('==================='.yellow);
    console.log(`Tabla del ${ base }`.green);
    console.log('==================='.yellow);


    if (!Number(base)) {
        throw new Error(`El dato ingresado '${ base }' no es un número`);
    }

    for (let i = 1; i <= limite; i++) {

        data += `${ base } * ${ i } = ${ base * i }\n`;
    }

    return data;
}


// console.log(module); // module es un objeto global accesible desde cualquier sitio de la app

module.exports = {
    crearArchivo,
    listarTabla
}