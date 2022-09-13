
/*Realizar correcciones en el ejercicio para que se puedan imprimir sin errores,
  incluyendo interfaces

const pruebaAlumno:utlAlumno{
    nombre:'Sara',
    edad:22,
    direccion:{
        calle:,
        pais:,
        estado:,
        numero:,
    }
    mostrarDireccion(){
        return this.nombres', '+this.direccion.estado+', '+this.direccion.pais
    }
}

let direccion:(string|number)[]=['Hockey',116,'Guanajuato','Mexico'];

function mostrarDireccion(utlAlumno){
    return pruebaAlumno.name + pruebaAlumno.ed + pruebaAlumno.direccion 
}*/

interface utlAlumno{            
    name:string,
    ed:number,
    direccion:direccion
    mostrarDireccion:()=>void;

}

interface direccion{
    calle:string,
    pais:string,
    estado:string,
    numCasa:number
}

const pruebaAlumno:utlAlumno={
    name:'Sara',
    ed:22,
    direccion:{
        calle:'Hockey',
        pais:'Mexico',
        estado:'Guanajuato',
        numCasa:118
    },
    mostrarDireccion(){
        return this.name + ', ' + this.ed + ', ' + this.direccion.calle + ', ' +
        this.direccion.pais + ', ' + this.direccion.estado + ', ' + this.direccion.numCasa
    }
}

console.log(pruebaAlumno.mostrarDireccion);