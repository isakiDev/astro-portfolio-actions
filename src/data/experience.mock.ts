interface Task {
  title?: string;
  description?: string | string[];
  url?: string;
}

export interface Job {
  role?: string;
  company?: string;
  date?: string;
  tasks?: Task[];
}

export const mockExperience: Job[] = [
  {
    role: 'Desarrollador FullStack',
    company: 'No Country',
    date: 'may 2024 - actualidad',
    tasks: [
      {
        title: 'BarberHub',
        description: 'Aplicación web innovadora para automatizar la reserva de citas en barberías. En esta ocasión, mi rol fue el de backend developer, colaborando con un equipo de personas de diferentes países para dar vida a nuestra idea.',
        url: 'http'
      },
      {
        title: 'EcoViaje',
        description: 'Aplicación web para ',
        url: 'http'
      }
    ],
  },
  {
    role: 'Desarrollador Web',
    company: 'ColTec Spa',
    date: 'ene 2023 - jul 2023',
    tasks: [
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



// <!-- <ol class="relative border-s border-neutral-400">
//   <li class="mb-10 ms-4">
//     <div
//       class="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 borde border-gray-900 bg-amber-500"
//     >
//     </div>

//     <h3>Application UI code in Tailwind CSS</h3>

//     <time class="mb-1 text-sm font-normal leading-none text-neutral-500"
//       >February 2022
//     </time>

//     <p class="mb-4 text-base font-normal">
//       Get access to over 20+ pages including a dashboard layout, charts, kanban
//       board, calendar, and pre-order E-commerce & Marketing pages.
//     </p>

//     <a
//       href="#"
//       class="ml-auto py-1.5 px-3 bg-tertiary hover:bg-white/10 p-2 rounded-xl text-white/80 hover:cursor-pointer hover:text-white transition-all duration-300"
//       >Leer mas</a
//     >
//   </li>
// </ol> -->