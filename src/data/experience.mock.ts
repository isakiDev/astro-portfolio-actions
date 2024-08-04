import {type TimeLineData } from "@ui/TimeLine/time-line.interface";

export const mockExperience: TimeLineData[] = [
  {
    title: 'Desarrollador FullStack',
    subTitle: { title: 'No Country', url: 'https://www.linkedin.com/company/nocountrytalent'},
    date: 'may 2024 - actualidad',
    extraDetails: [
      {
        title: 'BarberHub',
        description: 'Aplicación web innovadora para automatizar la reserva de citas en barberías. En esta ocasión, mi rol fue el de backend developer, colaborando con un equipo de personas de diferentes países para dar vida a nuestra idea.',
        url: 'https://www.linkedin.com/feed/update/urn:li:activity:7200603436743016449/'
      },
      // {
      //   title: 'EcoViaje',
      //   description: 'Aplicación web para el mercado de cartpooling',
      //   url: 'http'
      // }
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
