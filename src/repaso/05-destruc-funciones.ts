
//desestructutacion de funciones 
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

export function calcularIva(productos:Producto[]):number{
    let total=0;
    productos.forEach((producto)=>{
        total+=producto.precio;
    })
    return total*=0.16;
}

const articulos1=[telefono, tablet];
const totalIva=calcularIva(articulos1);
console.log('totalIva:', totalIva);

//Desestructuracion de funciones
function calcularIva(productos:Producto[]):[number,number]{
    let total=0;
    productos.forEach(({precio})=>{
        total+=precio;
    })
    return [total, total*0.16];
}

const articulos=[telefono, tablet];
const [total,iva]=calcularIva(articulos);
console.log('Total: ', total);
console.log('Total con Iva', iva);