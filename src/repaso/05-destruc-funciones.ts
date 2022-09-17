
//desestructuración de funciones 
export interface Producto{
    desc:string;
    precio:number;
}

const telefono:Producto={
    desc:'OPPO',
    precio:5400
}
const tablet:Producto={
    desc:'IPad Air',
    precio:6800,
}

function calcularIva(productos:Producto[]):number{
    let total=0;
    productos.forEach((producto)=>{
        total+=producto.precio;
    })
    return total*=0.16;
}

const articulos1=[telefono, tablet];
const totaliva=calcularIva(articulos1);
console.log('totalIva:', totaliva);

//Desestructuracion de funciones
export function calcularIVA(productos:Producto[]):[number,number]{
    let total=0;
    productos.forEach(({precio})=>{
        total+=precio;
    })
    return [total,total*0.16];
}

const articulos=[tablet, telefono];
const [total,iva]=calcularIVA(articulos);
console.log('Total: ', total);
console.log('Total con Iva', iva);