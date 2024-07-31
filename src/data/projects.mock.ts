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
    description: 'Aplicación dedicada al mundo de la moda, donde los usuarios pueden exhibir sus estilos más destacados.',
    skills: ["NestJS","TypeScript","React","Docker","Cloudinary"],
    urlImage: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png',
    urlRepository: 'https://github.com/isakiDev/nest-fashion-like',
    urlDeploy: 'https://isakidev-fashion-like.netlify.app'
  },
  {
    title: 'Calendar',
    description: 'Gestionador de notas con redux y autenticación de usuarios.',
    urlImage: 'https://res.cloudinary.com/dzn3nempv/image/upload/v1705917516/portfolio/xojyy8odx2mnyc8uleeh.png',
    skills: ["Node.js","TypeScript","React","Redux","TailwindCSS","MongoDB"],
    urlRepository: 'https://github.com/isakiDev/node-calendar-ts',
    urlDeploy: 'https://react-calendar.isakidev.com/auth/login',
  },
  {
    title: 'Raizo Ecommerce',
    description: 'Tienda online dedicada a la venta de productos electrónicos.',
    skills: ["Node","React","TypeScript", "TailwindCSS"],
    urlDeploy: '',
    urlImage: ''
  },
  {
    title: 'Todo List',
    urlImage: 'https://res.cloudinary.com/dzn3nempv/image/upload/v1701660260/portfolio/gnexvarptbkebssqc3k7.png',
    description: 'Gestionador de tareas',
    skills: ["React","TypeScript","TailwindCSS"],
    urlRepository: 'https://github.com/isakiDev/react-todo-ts',
    urlDeploy: 'https://react-todots.isakidev.com',
  }
]