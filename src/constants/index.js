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
  tybeau,
  depanizy,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    // title: "About",
    title: "À propos",
  },
  {
    id: "work",
    // title: "Work",
    title: "Expériences",
  },
  {
    id: "projects",
    // title: "Projects",
    title: "Projets",
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
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  // {
  //   name: "php",
  //   icon: php,
  // },
  // {
  //   name: "symfony",
  //   icon: symfony,
  // },
];

const experiences = [
  {
    title: "Développeur Full Stack - En Cdi",
    company_name: "Depanizy, La courneuve",
    icon: depanizy,
    iconBg: "#E6DEDD",
    date: "08/2024 - 07/2025",
    points: [
      "Développement et déploiement d'applications web et mobiles.",
      "Maintenance et mise à jour de sites web existants avec de nouvelles fonctionnalités.",
      "Optimisation et résolution des bugs sur les plateformes web en production.",
      "Collaboration avec les équipes pour améliorer l’expérience utilisateur et la performance des applications web.",
    ],
  },
  {
    title: "Développeur Full Stack - En Alternance",
    company_name: "Ml2m Consulting, Saint-Maurice",
    icon: ml2m,
    iconBg: "#E6DEDD",
    date: "03/2022 - 08/2024",
    points: [
      "Assurer les évolutions et la maintenance des applications existantes.",
      "Participer à la structuration des bases de données MySql.",
      "Tester et configurer le serveur, mettre en ligne le site.",
      "Gestion des bugs et des correctifs à apporter.",
      "Développer des API REST.",
    ],
  },
  {
    title: "Ingénieur DevOps - Projet de Fin d'Études",
    company_name: "DSP, Paris",
    icon: dsp,
    iconBg: "#E6DEDD",
    date: "03/2023 - 03/2024",
    points: [
      "Développement et déploiement d'un workflow d'intégration et de déploiement continu (CI/CD) avec Docker, Jenkins et Gitea.",
      "Automatisation des processus de construction, de test et de déploiement pour garantir l'efficacité et la fiabilité des applications web.",
      "Création et mise en place d'un site web, intégrant des solutions DevOps pour une gestion optimale.",
    ],
  },
  {
    title: "Développeur Full Stack - Projet de Fin d'Année",
    company_name: "Institut F2I, Paris",
    icon: f2i,
    iconBg: "#383E56",
    date: "01/2022 - 01/2023",
    points: [
      "Analyse et conception : UML.",
      "Développement d'applications web et mobile pour une agence de location d'habitats insolites.",
      "Tester et Mise en production.",
    ],
  },
  {
    title: "Développeur Front-End",
    company_name: "OCP, Maroc",
    icon: ocp,
    iconBg: "#E6DEDD",
    date: "06/2021 - 10/2021",
    points: [
      "Développement d'une application web de gestion des ressources humaines.",
    ],
  },
  {
    title: "Développeur Full Stack",
    company_name: "ONCF, Maroc",
    icon: oncf,
    iconBg: "#383E56",
    date: "04/2020 - 09/2020",
    points: [
      "Développement d'une application web de gestion des factures.",
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
    "Après que Hamza ait optimisé notre site web, notre trafic a augmenté de 50%. Nous ne pourrons jamais le remercier assez !",
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
        color: "indigo-text-gradient",
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
        color: "indigo-text-gradient",
      },
    ],
    image: thetiptop,
    source_code_link: "https://github.com/hamzalimouni/thetiptop.git",
  },
  {
    name: "Wedding Memories",
    description:
      "Wedding Memories est une application permettant aux invités de partager des photos et vidéos de mariages, développée avec React et Node.js, et utilisant Tailwind CSS pour le design.",
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
        color: "indigo-text-gradient",
      },
    ],
    image: wedding,
    source_code_link: "https://github.com",
  },
  {
    name: "Cbs Social",
    description:
      "Cbs Social est un site web de gestion des ressources humaines. Il a été développé en utilisant les frameworks React et Symfony, et en utilisant Tailwind CSS pour le design.",
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
        color: "indigo-text-gradient",
      },
    ],
    image: cbssocial,
    source_code_link: "http://social.sascbs.com/login",
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
      "Un site de commande en ligne moderne et efficace permettant aux utilisateurs de parcourir, rechercher et acheter des produits ainsi que de suivre leurs commandes. Développée avec React et Symfony, et utilisant Tailwind Css pour le design.",
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
        color: "indigo-text-gradient",
      },
    ],
    image: dadiffusion,
    source_code_link: "https://commandes.dadiffusion.fr",
  },
  {
    name: "AS Saint-Maurice",
    description:
      "Une plateforme qui permet aux utilisateurs d'inscrire leur(s) enfant(s) au club de football AS Saint-Maurice et suivre leur dossier, jusqu'à ce qu'il soit accepté par les administrateurs. Développée avec React et Node, et utilisant Bootstrap pour le design.",
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
        color: "indigo-text-gradient",
      },
    ],
    image: assaintmaurice,
    source_code_link: "https://as-saintmaurice.fr",
  },
  {
    name: "Tybeau",
    description:
      "Tybeau est une plateforme de prise de rendez-vous instantanée avec des professionnels de la beauté. Développée avec React, Next.js, et Node.js, elle intègre Stripe pour le paiement, SMSMode pour l'envoi de SMS, Amazon SES pour les e-mails, et DocuSign pour la signature de contrats.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "gray-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "indigo-text-gradient",
      },
      {
        name: "postgresql",
        color: "orange-text-gradient",
      },
    ],
    image: tybeau,
    source_code_link: "https://tybeau.com",
  },
  
];

export { services, technologies, experiences, testimonials, projects };