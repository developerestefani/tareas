/**
 * configuracion de los comandos del yargs
 */

const descripcion = {
        demand: true,
        alias: 'd'
}

const completado = {
        alias: 'c',
        default: true
}

const arvg = require("yargs")
    .command('crear', 'Crear una taarea por realizar',{descripcion})
    .command('actualizar', 'Actualizar el estado de una tarea a realizado',{descripcion, completado})
    .command('borrar', 'Elimina una taarea por realizar',{descripcion})
    .help()
    .argv;
    
module.exports = {
    arvg
}