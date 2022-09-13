
//Realizar correcciones en el ejercicio para que se puedan imprimir sin errores,
//incluyendo interfaces

/*const pruebaAlumno:utlAlumno{
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
*/
let direccion:(string|number)[]=['Hockey',116,'Guanajuato','Mexico'];

interface utlAlumno{            
    name:string,
    ed:number,
    direccion?:string|number[],

}

const pruebaAlumno:utlAlumno={
    name:'Sara',
    ed:22,
    
}

function mostrarDireccion(utlAlumno){
    return pruebaAlumno.name + pruebaAlumno.ed + pruebaAlumno.direccion 
}