interface Task {
  title?: string;
  description?: string | string[];
  url?: string;
}

interface Job {
  role?: string;
  company?: [string, string]
  date?: string;
  projects?: Task[];
}

export const mockExperience: Job[] = [
  {
    role: 'Desarrollador FullStack',
    company: ['No Country', 'https://www.linkedin.com/company/nocountrytalent'],
    date: 'may 2024 - actualidad',
    projects: [
      {
        title: 'BarberHub',
        description: 'Aplicación web innovadora para automatizar la reserva de citas en barberías. En esta ocasión, mi rol fue el de backend developer, colaborando con un equipo de personas de diferentes países para dar vida a nuestra idea.',
        url: 'http'
      },
      {
        title: 'EcoViaje',
        description: 'Aplicación web para el mercado de cartpooling',
        url: 'http'
      }
    ],
  },
  {
    role: 'Desarrollador Web',
    company: ['ColTec Spa', ''],
    date: 'ene 2023 - jul 2023',
    projects: [
      {
        description: [
          'Mantenimiento de módulos en PHP',
          'Diseñar interfaces de usuario con Bootstrap',
          'Integración de solicitudes HTTP con jQuery',
          'Administración de base de datos MySQL'
        ]
      }
    ],
  }
]