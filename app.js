/**
 * Archivo de ejecución principal
 */


//Dependecias
const arvg = require('./config/yargs').arvg;
const colors = require('colors');

//funciones
const {crear, getListado, actualizar, borrarTarea} = require('./tareas/tareas');

const comando = arvg._[0];

switch (comando) {
    case 'crear':
        
        let tarea = crear(arvg.descripcion);
        console.log(tarea);
        
        break;

    case 'listar':
        
        let tareas = getListado();

        for (let actividades of tareas) {
            console.log('==========Por Hacer==========='.green);
            console.log(actividades.descripcion);
            console.log('Estado: ',actividades.completado);
            console.log('============================== \n'.green);
        }

        break;

    case 'actualizar':
        
        let actualizado = actualizar(arvg.descripcion, arvg.completado);
        console.log(actualizado);

        break;

    case 'borrar':
        
        let borrado = borrarTarea(arvg.descripcion);
        console.log(borrado);

        break;

    default:
        break;
}