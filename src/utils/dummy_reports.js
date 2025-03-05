import croto01 from "../assets/croto01.jpg";
import croto02 from "../assets/croto02.avif";
import croto03 from "../assets/croto03.jpg";
import croto04 from "../assets/croto04.jpg";
import croto05 from "../assets/croto05.jpg";

const dummyReports = [
  {
    fecha: "15/03/2025",
    hora: "09:45 AM",
    sucursal: "LAFERRERE01",
    nivel: 3,
    descripcion: "Descripcion de la alerta",
    imagen: croto01, // Usar la ruta de la imagen directamente
    direccion: "Av. Figueroa Alcorta 2500, Laferrere",
    lapsoMensual: 5,
    lapsoSemanal: 2,
    lapsoDiario: 1,
  },
  {
    fecha: "10/02/2025",
    hora: "13:20 PM",
    sucursal: "CATAN03",
    nivel: 3,
    descripcion: "Descripcion de la alerta",
    imagen: croto02, // Usar la ruta de la imagen directamente
    direccion: "Av. Juan Manuel de Rosas 1500, Catan",
    lapsoMensual: 5,
    lapsoSemanal: 2,
    lapsoDiario: 1,
  },
  {
    fecha: "15/03/2025",
    hora: "09:45 AM",
    sucursal: "LAFERRERE01",
    nivel: 2,
    descripcion: "Descripcion de la alerta",
    imagen: croto03, // Usar la ruta de la imagen directamente
    direccion: "Av. Figueroa Alcorta 2500, Laferrere",
    lapsoMensual: 5,
    lapsoSemanal: 2,
    lapsoDiario: 1,
  },
  {
    fecha: "22/01/2025",
    hora: "17:50 PM",
    sucursal: "MADERO02",
    nivel: 3,
    descripcion: "Descripcion de la alerta",
    imagen: croto05, // Usar la ruta de la imagen directamente
    direccion: "Av. Madero 900, Buenos Aires",
    lapsoMensual: 5,
    lapsoSemanal: 2,
    lapsoDiario: 1,
  },
  {
    fecha: "22/01/2025",
    hora: "17:50 PM",
    sucursal: "MADERO02",
    nivel: 1,
    descripcion: "Descripcion de la alerta",
    imagen: croto04, // Usar la ruta de la imagen directamente
    direccion: "Av. Madero 900, Buenos Aires",
    lapsoMensual: 5,
    lapsoSemanal: 2,
    lapsoDiario: 1,
  },
];

export default dummyReports;
