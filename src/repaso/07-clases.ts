//Clases o Class
//Modificador de acceso por defecto la clase es publica 
class Persona{ //private, protected, public
    nombre:string='sara';
    edad:number;

//Constructor de la clase 
constructor(a:string, b:number){
    this.nombre=a;
    this.edad=b;
}
setNombre(a:string){
    this.nombre=a;
}

getNombre():string{
    return this.nombre;
}
    //metodo
    imprimir():void{
        console.log(`Nombre: ${this.nombre} y edad: ${this.edad}`); //Se colocaron acentos invertidos
    }                                          //this hace referencia a la propiedad actual
}
let persona1:Persona;
persona1=new Persona();

let persona2: Persona;
persona2=new Persona();

persona1.nombre='Sarai';
persona1.imprimir();
persona2.imprimir();

console.log(persona1.getNombre())

//nueva clase de nombre Dado
class Dado{
    private valor:number;
    public tirar(){
        this.generar();
    }
    private generar(){
        this.valor=Math.floor(Math.random()*6)+1;
    }
    public imprimir(){
        console.log(`Salio el valor ${this.valor}`);
    }
}
let dado1=new Dado();
dado1.tirar();
dado1.imprimir();