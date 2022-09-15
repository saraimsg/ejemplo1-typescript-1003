
//Desestruturacion de objetos

interface Detalles{
    autor:string;
    anio: number;
}

interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles //propiedad de otro 
}

const reproductor:Reproductor={
    volumen:90,
    segundo:60,
    cancion:'Mañanitas',
    detalles:{
        autor:'udhei',
        anio:2021,

    }
}

const{cancion, volumen, segundo, detalles}=reproductor;

const{autor, anio}=detalles;

console.table('El nombre de la canción es: ' + reproductor.cancion);
console.table('El volumen actual es: ' + reproductor.volumen);
console.table('El segundo actual es: ' + reproductor.segundo);
console.table('El autor de la canción es: ' + detalles.autor);

//Arreglos
const libros:string[]=['Atardecer','Paisaje', 'Noche', 'Estrellas'];

console.log('nombresL 1:', libros[0]);
console.log('nombresL 2:', libros[1]);
console.log('nombresL 3:', libros[2]);
console.log('nombresL 4:', libros[3]);

const[n1, n2, n3, n4]=libros;

console.log('nombresL 1:', n1);
console.log('nombresL 2:', n2);
console.log('nombresL 3:', n3);
console.log('nombresL 4:', n4);