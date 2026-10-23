import imgCilindro5 from '../assets/img/cilindro-gas-normal-5-kg-1.jpg';
import imgCilindro11 from '../assets/img/cilindro-gas-normal-11-kg.jpg';
import imgCilindro15 from '../assets/img/cilindro-gas-normal-15-kg.jpg';
import imgMonitoGas from '../assets/img/monito_gas_v2.png';

export const imagenMascota = imgMonitoGas;

export const productos = [
    {
        id: '5kg',
        imagen: imgCilindro5,
        nombre: 'Cilindro de Gas Licuado 5 Kg',
        nombreCatalogo: 'Cilindro de Gas 5 kg',
        descripcionCorta: 'Ideal para cocinillas, camping o consumos menores de alta movilidad.',
        descripcionLarga: 'Ideal para cocinillas, camping o consumos menores de alta movilidad.',
        precio: '$10.500',
        pesoCarga: '5 Kg'
    },
    {
        id: '11kg',
        imagen: imgCilindro11,
        nombre: 'Cilindro de Gas Licuado 11 Kg',
        nombreCatalogo: 'Cilindro de Gas 11 kg',
        descripcionCorta: 'Formato tradicional para cocinas de uso diario en departamentos y casas.',
        descripcionLarga: 'Formato tradicional para cocinas de uso diario en departamentos y casas.',
        precio: '$17.500',
        pesoCarga: '11 Kg'
    },
    {
        id: '15kg',
        imagen: imgCilindro15,
        nombre: 'Cilindro de Gas Licuado 15 Kg',
        nombreCatalogo: 'Cilindro de Gas 15 kg',
        descripcionCorta: 'Máxima duración para calefacción integral, calefones y alto consumo.',
        descripcionLarga: 'El formato de 15 Kg es la solución ideal para el consumo del hogar: calefacción de grandes espacios, cocina y agua caliente.',
        precio: '$23.000',
        pesoCarga: '15 Kg'
    }
];
