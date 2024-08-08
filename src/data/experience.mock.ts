import {type TimeLineData } from "@ui/TimeLine/time-line.interface";

export const mockExperience: TimeLineData[] = [
  {
    title: 'Desarrollador FullStack',
    subTitle: { title: 'No Country', url: 'https://www.linkedin.com/company/nocountrytalent'},
    date: 'may 2024 - actualidad',
    extraDetails: [
      {
        title: 'EcoViaje',
        description: 'Desarrollé APIs e interfaces de usuario para una aplicación web de carpooling. Colaboré estrechamente con el equipo de backend en la creación de bases de datos y en la implementación de endpoints para la consulta de viajes. Además, diseñé y desarrollé las distintas pantallas de la aplicación utilizando React y TailwindCSS, garantizando una experiencia de usuario fluida y visualmente atractiva.'
      },
      {
        title: 'BarberHub',
        description: 'Como desarrollador backend, me encargué del diseño, prueba y documentación de la API para una aplicación web innovadora destinada a automatizar la reserva de citas en barberías. Colaboré con un equipo internacional para concretar nuestra visión, enfocándome en crear una solución robusta, eficiente y bien documentada.',
        url: 'https://www.linkedin.com/feed/update/urn:li:activity:7200603436743016449/'
      }
      
    ],
  },
  {
    title: 'Desarrollador FullStack',
    subTitle: { title: 'ColTec Spa', url: 'https://www.linkedin.com/company/coltec-spa/'},
    date: 'ene 2023 - jul 2023',
    extraDetails: [
      {
        description: 'Participé en el desarrollo de una aplicación de gestión para salas de venta, restaurantes y sistemas de autoatención. Mi trabajo incluyó la creación de nuevos módulos desarrollados con PHP para la aplicación, como la gestión de impresoras, vacaciones y permisos de empleados. También desarrollé interfaces de usuario utilizando Bootstrap y gestioné la creación de nuevas tablas en la base de datos.'
      }
    ],
  }
]
