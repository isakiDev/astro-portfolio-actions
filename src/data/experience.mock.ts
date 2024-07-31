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
    title: 'Desarrollador Web',
    subTitle: { title: 'ColTec Spa', url: 'https://www.linkedin.com/company/coltec-spa/'},
    date: 'ene 2023 - jul 2023',
    extraDetails: [
      {
        description: 'Participé en el desarrollo de una aplicación para la gestión de ventas y empleados, asumiendo un rol de fullstack. Mi trabajo abarcó el diseño de interfaces de usuario, la creación y administración de campos y tablas en la base de datos, y su integración, todo implementado con PHP.' 
      }
    ],
  }
]
