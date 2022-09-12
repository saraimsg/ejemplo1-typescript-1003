//Objetos

let apellido:string|number;  //Se aceptan ambos tipos de datos para la variable apellido
apellido = 'solis gil';
apellido = 100;

let mascotas=['perro','gato',100,true];

let tem2:(boolean|number|string)[]=['conejo',100]; //Se coloca entre parentesis el tipado de datos
tem2.push(200); //

let acciones:string[]=['dormir','comer','volar'];

//Definiendo objetos

interface Alumno{            //Cuando se crea una interfaz se deben crear las mismas 
    matricula:number|string, //variables en const
    nombre1:string,
    apeterno:string,
    acciones?:string[],
    email:string
}

const alumno: Alumno={
    matricula:18002722,
    nombre1:'Michelle',
    apeterno:'Gil',
    email:'saraisolis.mg@gmail.com'
}
    
alumno.nombre1='Sarai';

console.table(alumno);



