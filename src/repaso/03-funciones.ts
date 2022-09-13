//Manejo de funciones 
function nombres():void{
    console.log('nombre'); //void no regresa parametros
}

function sumar(num1:number,num2:number):number{
    return num1+num2;
}

function restar(num1:number,num2:number,num3:number):number{
    if(num3){
        return num1-num2-num3;
    }
    else{
        return num1-num2;
    }
}
function resta(num1:number,num2:number,num3:number=0):number{
    return num1-num2-num3;
}

const sumarFlecha(a:number,b:number):number=>{
    return a+b;
}

interface escuelaUTL{
    nombre2:string,
    correo:string,
    edad:number,
    saludar:()=>void;
}

function alumnoUTL(alumno:escuelaUTL,calificar:number):void{
    alumno.nombre2="Michelle";
    alumno.correo="saraisolis.mg@gmail.com"
    alumno.edad=calificar;
}

const nuevoAlumno:escuelaUTL={
    nombre2:'Alejandro',
    correo:'sarai@gmail.com',
    edad?:21,
    saludar() {
        console.log('Hola, ¿como estas?');
    },
}

console.log(nombres());
//console.log(sumar(10,5));
console.log(restar(8,5,2));
console.log(resta(8,5,2));
