/**
 * CRUD de las tareas
 */


//dependencias
const fs = require("fs");

let listadoPorHacer = [];

const guardarDB = () =>{

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`./BD/tareas.json`, data, (err) => {

        if (err) 
          throw new Error (err);
        else
          return `Se guardo correctamente la funcion`;

      });

};

const cargarBD = () => {

    try {
        listadoPorHacer = require('../BD/tareas.json');
    } catch (error) {
        listadoPorHacer = [];
    }

};

const crear = (descripcion) => {

    cargarBD();

    let tarea = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(tarea);

    guardarDB();

    return tarea;

};

const getListado = () => {

    cargarBD();

    return listadoPorHacer;

};

const actualizar = (descripcion, completado) => {

    cargarBD();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)

    if (index >= 0) {
        
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;

    }else{

        return false;

    }

};

const borrarTarea = (descripcion) => {

    cargarBD();

    let ListadoNuevo = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion)

    if (ListadoNuevo === listadoPorHacer) {
        
        return false;

    }else{

        listadoPorHacer = ListadoNuevo;
        guardarDB();
        return true;

    }

};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrarTarea
};