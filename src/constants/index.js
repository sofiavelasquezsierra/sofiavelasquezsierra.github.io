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
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "Operating Systems",
      icon: web,
    },
    {
      title: "Web Development",
      icon: web,
    },
    {
      title: "Computer Organization",
      icon: web,
    },
    {
      title: "Algorithms & Data Structures",
      icon: web,
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
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Developer",
      company_name: "m",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March  - April 2021",
      points: [
        "Developing.",
        "Collaborating.",
        "Implementing .",
        "Participating .",
      ],
    },
    {
      title: "  Developer",
      company_name: "m",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan - Feb 2022",
      points: [
        "Developing .",
        "Collaborating.",
        "Implementing .",
        "Participating ",
      ],
    },
    {
      title: "Developer",
      company_name: "m",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan  - Jan 2023",
      points: [
        "Developing .",
        "Collaborating",
        "Implementing .",
        "Participating.",
      ],
    },
    {
      title: "Developer",
      company_name: "m",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan - Present",
      points: [
        "dev.",
        "Collaborating.",
        "Implementing.",
        "Participating .",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "test.",
      name: "name",
      designation: "position",
      company: " Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "test",
      name: "name",
      designation: "COO",
      company: "corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "test",
      name: "name",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "name",
      description:
        " desc",
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
      name: "name ",
      description:
        "desc",
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
      source_code_link: "https/",
    },
    {
      name: "name",
      description:
        " desc",
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