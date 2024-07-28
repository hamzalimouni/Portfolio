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
  assaintmaurice,
  novea,
  dadiffusion,
  ecommerce,
  cbssocial,
  wedding,
  thetiptop,
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
    "Je pensais qu'il était impossible de créer un site web aussi beau que notre produit, mais Hamza m'a prouvé le contraire.",
      // "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
    "Je n'ai jamais rencontré de développeur web qui se soucie autant du succès de ses clients que Hamza.",
      // "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
    "Après que Rick ait optimisé notre site web, notre trafic a augmenté de 50%. Nous ne pourrons jamais le remercier assez !",
      // "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AtypikHouse",
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
    name: "Thé tiptop",
    description:
      "Thé Tip Top est une application de jeu-concours permettant aux clients de participer via un code unique reçu lors d'un achat, développée avec React et Node.js, et utilisant Tailwind CSS pour le design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: thetiptop,
    source_code_link: "https://github.com/hamzalimouni/thetiptop.git",
  },
  {
    name: "Wedding Memories",
    description:
      "Wedding Memories est une application permettant aux invités de partager des photos et vidéos de mariage avec le couple, développée avec React et Node.js, et utilisant Tailwind CSS pour le design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: wedding,
    source_code_link: "https://github.com",
  },
  {
    name: "E-commerce",
    description:
      "E-commerce est une application de commerce en ligne permettant aux utilisateurs de parcourir, rechercher et acheter des produits en ligne, développée avec React et Node.js, et utilisant SCSS pour le design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node js",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/hamzalimouni/Ecommerce-1.git",
  },
  {
    name: "Dadiffusion",
    description:
      "Un site de commande en ligne moderne et efficace permettant aux utilisateurs de parcourir, rechercher et acheter des produits et un suivi de commande. développée avec React et Symfony, et utilisant Tailwind Css pour le design.",
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
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: dadiffusion,
    source_code_link: "https://commandes.dadiffusion.fr",
  },
  {
    name: "As Saint-Maurice",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node js",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: assaintmaurice,
    source_code_link: "https://as-saintmaurice.fr",
  },
  {
    name: "Novea France",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node js",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: novea,
    source_code_link: "https://crm-novea.fr",
  },
  {
    name: "Cbs Social",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node symfony",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: cbssocial,
    source_code_link: "http://social.sascbs.com/login",
  },
];

export { services, technologies, experiences, testimonials, projects };
