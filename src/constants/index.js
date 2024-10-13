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
  meta,
  starbucks,
  tesla,
  ibm,
  hpe,
  luxoft,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  java,
  spring,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Despre",
  },
  {
    id: "work",
    title: "Activitate",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Dezvoltator Java",
    icon: web,
  },
  {
    title: "Dezvoltator  microservicii",
    icon: mobile,
  },
  {
    title: "Dezvoltator backend",
    icon: backend,
  },
  {
    title: "Dezvotator Spring Boot",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },

  {
    name: "Java",
    icon: java,
  },

  {
    name: "Spring",
    icon: spring,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Java Developer",
    company_name: "Luxoft | București",
    icon: luxoft,
    iconBg: "#E6DEDD",
    date: "Iun 2021 – Sep 2024",
    points: [
      "Dezvoltarea de noi funcționalități pentru sistemul de administrare bancar al Deutsche Bank, conform cerințelor de business.",
      "Evaluarea unei solutii financiare dezvoltată de Genesis Global si folosita ca platforma de dezvoltare",
      "Crearea de scripturi automatizate pentru echipa de QA, contribuind la eficientizarea proceselor de testare și livrare. ",
      "Asigurarea unui flux de lucru eficient prin colaborare constantă cu echipa de automatizare și managementul proiectului.",
    ],
  },
  {
    title: "Java Developer",
    company_name: "IBM | București",
    icon: ibm,
    iconBg: "#383E56",
    date: "Feb 2019 – Iun 2021",
    points: [
      "Dezvoltarea și mentenanța unui instrument construit pe infrastructura Eclipse pentru a ajuta dezvoltatorii în gestionarea codului Cobol și Natural în sistemele bancare.",
      "Implementarea de noi funcționalități și îmbunătățirea celor existente pentru a optimiza capabilitățile de analiză și compilare a codului.",
      "Integrarea produsului cu o nouă bază de date, asigurând o gestionare și recuperare eficientă a datelor.",
      "Mentenanța și actualizarea microserviciilor, asigurând fiabilitatea și performanța sistemului.",
      "Colaborarea cu echipe multidisciplinare, inclusiv designeri și manageri de proiect, pentru a alinia eforturile de dezvoltare cu obiectivele de business.",
    ],
  },
  {
    title: "Java Developer",
    company_name: "HPE | București",
    icon: hpe,
    iconBg: "#E6DEDD",
    date: "Sep 2015 – Feb 2019",
    points: [
      "Dezvoltarea și implementarea de framework-uri noi de la zero pentru unul dintre cei mai mari furnizori de soluții de telecomunicații din Germania.",
      "Scrierea documentației Java ",
      "Implementarea de teste funcționale și de performanță pentru a valida fiabilitatea și eficiența sistemului.",
      "Proiectarea și implementarea unei soluții de colectare a datelor pentru a îmbunătăți procesul de analiză și gestionare a informațiilor..",
      "Crearea și implementarea de teste automate pentru a asigura calitatea și stabilitatea aplicației.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I had the pleasure of working with Silviu on a successful HPE project, where he distinguished himself by his " +
      "outstanding skills in Java software development and efficient solving of complex problems. " +
      "His constant commitment to quality and a proactive attitude were decisive in achieving the success of the project. " +
      "Also, his ability to communicate and collaborate with the team was instrumental in achieving our goals. " +
      "I recommend him to be a team leader in a software development team. ",
    name: "Octavian (Tani) Turcu, PMP®, Certified SAFe® 5 POPM ",
    designation: "Customer Project Manager EMEA ",
    company: "HPE",
    //image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
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
