
//exportar e importar
import { calcularIva, Producto } from "./repaso/05-destruc-funciones";

const carrito:Producto[]=[
    {
        desc:'Telefono1',
        precio:1520
    },
    {
        desc:'Telefono2',
        precio:890
    }
];
const[total,iva]=calcularIva(carrito);
console.log('Total:' ,total);
console.log('Total + IVA:', iva);