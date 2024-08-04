export interface Project {
  title: string;
  date?: string;
  description: string;
  skills: string[];
  urlImage: string;
  urlRepository?: string;
  urlDeploy: string;
}

export const mockProjects: Project[] = [
  {
    title: 'Fashion Like',
    date: 'feb 2024 - abr 2024',
    description: 'Red social dedicada al mundo de la moda, donde los usuarios pueden exhibir sus estilos más destacados.',
    skills: ["NestJS","TypeScript","React","Docker","Cloudinary", "PostgreSQL", "Zustand"],
    urlImage: 'https://res.cloudinary.com/dzn3nempv/image/upload/v1722641869/portfolio/bhppoums61vaagcohi1f.png',
    urlRepository: 'https://github.com/isakiDev/nest-fashion-like',
    urlDeploy: 'https://isakidev-fashion-like.netlify.app'
  },
  {
    title: 'Calendar',
    description: 'Aplicación web para agendar notas en un calendario atractivo, permitiendo a los usuarios visualizar el flujo y las fechas establecidas.',
    urlImage: 'https://res.cloudinary.com/dzn3nempv/image/upload/v1722633286/portfolio/nusbxa2suly7h1n0ctay.png',
    skills: ["Node.js","TypeScript","React","Redux","TailwindCSS","MongoDB", "Clean Architecture"],
    urlRepository: 'https://github.com/isakiDev/node-calendar-ts',
    urlDeploy: 'https://isakidev-calendar.netlify.app/',
  },
  // {
  //   title: 'Raizo Ecommerce',
  //   description: 'Tienda online dedicada a la venta de productos electrónicos.',
  //   skills: ["Node","React","TypeScript", "TailwindCSS", "MongoDB"],
  //   urlDeploy: '',
  //   urlImage: ''
  // },
  {
    title: 'Todo List',
    urlImage: 'https://res.cloudinary.com/dzn3nempv/image/upload/v1722633570/portfolio/dn8fqcnuhagjkqpbmrhb.png',
    description: 'Gestor de tareas diarias diseñado para mejorar la eficiencia de los usuarios. Facilita la organización y priorización de actividades.',
    skills: ["React","TypeScript","TailwindCSS"],
    urlRepository: 'https://github.com/isakiDev/react-todo-ts',
    urlDeploy: 'https://isakidev-todo.netlify.app/',
  }
]