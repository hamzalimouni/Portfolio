import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  oncf,
  ocp,
  f2i,
  dsp,
  ml2m,
  githubBlack,
  symfony,
  php,
  scss,
  atypikhouse,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Scss",
    icon: scss,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: githubBlack,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "php",
    icon: php,
  },
  {
    name: "symfony",
    icon: symfony,
  },
];

const experiences = [
  {
    title: "Développeur Full Stack",
    company_name: "ONCF, Maroc",
    icon: oncf,
    iconBg: "#383E56",
    date: "Avril 2020 - Septembre 2020",
    points: [
      "Développement d'une application web de gestion des factures.",
    ],
  },
  {
    title: "Développeur Front-End",
    company_name: "OCP, Maroc",
    icon: ocp,
    iconBg: "#E6DEDD",
    date: "Juin 2021 - Octobre 2021",
    points: [
      "Développement d'une application web de gestion des ressources humaines.",
    ],
  },
  {
    title: "Développeur Full Stack - Projet de Fin d'Année",
    company_name: "Institut F2I, Paris",
    icon: f2i,
    iconBg: "#383E56",
    date: "Janvier 2022 - Janvier 2023",
    points: [
      "Analyse et conception : UML.",
      "Développement d'applications web et mobile pour une agence de location d'habitats insolites.",
      "Tester et Mise en production.",
    ],
  },
  {
    title: "Ingénieur DevOps - Projet de Fin d'Études",
    company_name: "DSP, Paris",
    icon: dsp,
    iconBg: "#E6DEDD",
    date: "Février 2023 - Avril 2024",
    points: [
      "Développement et déploiement d'un workflow d'intégration et de déploiement continu (CI/CD) avec Docker, Jenkins et Gitea.",
      "Automatisation des processus de construction, de test et de déploiement pour garantir l'efficacité et la fiabilité des applications web.",
      "Création et mise en place d'un site web, intégrant des solutions DevOps pour une gestion optimale.",
    ],
  },
  {
    title: "Développeur Full Stack - En Alternance",
    company_name: "Ml2m Consulting, Saint-Maurice",
    icon: ml2m,
    iconBg: "#E6DEDD",
    date: "Mars 2023 - Août 2024",
    points: [
      "Assurer les évolutions et la maintenance des applications existantes.",
      "Participer à la structuration des bases de données MySql.",
      "Tester et configurer le serveur, mettre en ligne le site.",
      "Gestion des bugs et des correctifs à apporter.",
      "Développer des API REST.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Atypik House",
    description:
      "Atypikhouse est une application permettant de louer des logements insolites, elle a été développée en utilisant les frameworks Symfony et React, et intègre Stripe pour les paiements en ligne.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "symfony",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: atypikhouse,
    source_code_link: "https://github.com/hamzalimouni/atypikhouse-client.git",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
