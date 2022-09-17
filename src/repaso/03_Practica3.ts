//Usando sumas a=3 y b=5
//res: 3+3+3+3+3=15
class suma{
    private numero:number;
    public tem:number;

    setNumero(a:number){
        this.numero=a;
    }
    //Mediante get se obtiene el valor 
    getNumero():number{
        return this.numero;
    }
    //Se genero la suma 
    calcular():void{
        for(let i=1; i<6; ++i )
            console.log(`${this.numero} x ${i} = ${i*this.numero}`)
        }
}
let suma1 =new suma();
suma1.setNumero(5);
console.log('variable privada: '+suma1.getNumero());

suma1.tem=5;
console.log('variable publica '+suma1.tem);
