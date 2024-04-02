import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    acad,
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
   /*  {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    }, */
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    /* {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    }, */
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
   /*  {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    }, */
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Fundamentals Module",
      company_name: "Academlo",
      icon: acad,
      iconBg: "#fff",
      date: "February 2023 - March 2023",
      points: [
        "Learning the fundamentals of web development",
        "Projects with HTML and CSS",
        "Projects and logic with Javascript",
        "build an E-commerce with HTML, CSS and Javascript"
      ],
    },
    {
        title: "React Js Module",
        company_name: "Academlo",
        icon: acad,
        iconBg: "#fff",
        date: "April 2023 - May 2023",
        points: [
          "First projects with React",
          "Differents Apis with react hooks",
          "Projects with hooks, Apis, Redux, Javascript and CSS"
        ],
    },
    {
        title: "Node.Js Module",
        company_name: "Academlo",
        icon: acad,
        iconBg: "#fff",
        date: "June 2023 - July 2023",
        points: [
          "Projects with postgreSQL",
          "Render Server Side",
          "Build Apis with Express and Node.js"
        ],
    },
    {
        title: "Full stack Developer",
      company_name: "Academlo",
      icon: acad,
      iconBg: "#fff",
      date: "August 2023",
      points: [
        "Graduated as a full stack Developer"
      ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/88Simn88',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/simn-sanchez',
    }
];

export const projects = [
    {
        iconUrl: "C-L",
        theme: 'btn-back-red',
        name: 'Cabinas Love',
        description: 'Web application with galleries where you can see the differents products that the client offers and you can contact him for asking about the service. ',
        link: 'https://cabinaslove.netlify.app',
    },
    {
        iconUrl: "P",
        theme: 'btn-back-green',
        name: 'Pokedex',
        description: "Web-based platform that allows users to search and read information about differents pokemons. ",
        link: "https://pokedex-sim.netlify.app",
    },
    {
        iconUrl: "E",
        theme: 'btn-back-blue',
        name: 'E-commerce',
        description: "Web application that enables users to search, view, check stock and buy products.",
        link: "https://e-commerce-sim.netlify.app",
    },
    {
        iconUrl: "R&M",
        theme: 'btn-back-pink',
        name: 'Rick and Morty',
        description: "Web-based platform that allows users to search and read information about differents characters of Rick and Morty . ",
        link: "https://rickandmorty-sim.netlify.app",
    },
    {
        iconUrl: "P",
        theme: 'btn-back-black',
        name: 'Petsblog',
        description: "Web plattform where you can find all the information that you need for your pets. ",
        link: "https://petsblog-sim.netlify.app",
    },
    {
        iconUrl: "W-A",
        theme: 'btn-back-yellow',
        name: 'Wheather App',
        description: "Web app that allows users to have information about weather, searching for location and name.  ",
        link: "https://weather-app-sim.netlify.app",
    }
];