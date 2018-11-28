/**
 * FILE SYSTEM - FS
 * 
 *  Con require podemos requerir tres tipos de archivos, 
 * 
 * 1.- Los que son nativos de nodejs, ej: fs
 * 2.- Los que son creados por terceros, ej: express
 * 3.- Los que son creados por nosotros, estos empiezan siempre con ./, ej ./suma.js
 * 
 */




const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');



//console.log(process.argv); //en process.argv obtenemos los parámetros de la terminal


//let argv2 = process.argv;

console.log(argv);

let comando = argv._[0];


switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(resp => console.log(`Listar tabla: \n${ resp }`))
            .catch(err => console.log(err));
        break;

    case 'crear':
        crearArchivo(argv.base, limite = 10)
            .then(archivo => console.log(`Archivo creado: ${ archivo.green } `))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');

}


//console.log(parametro);
//console.log(argv2);

// let parametro = process.argv[2];
// let base = parametro.split('=')[1];


// console.log(module); // module es un objeto global accesible desde cualquier sitio de la app