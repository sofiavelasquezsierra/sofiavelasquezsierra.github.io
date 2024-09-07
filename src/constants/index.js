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
    c,
    java,
    python,
    unix,
    bnpparibas,
    agilegtm,
    bam,
    coursechamp,
    hotelbooking,
    divesafe,
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Java",
      icon: java,
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
      name: "docker",
      icon: docker,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "unix",
      icon: unix,
    },
    {
      name: "c",
      icon: c,
    },
  ];
  
  const experiences = [
    {
      title: "IT Production Security intern",
      company_name: "BNP Paribas",
      icon: bnpparibas,
      iconBg: "#438B61",
      date: "May  - August 2024",
      points: [
        "Programmed and deployed a Python-based website using Django to display critical server data, aiding over 200 employees",
        "Tasked to automate IT Security and Cyber Security processes using SQL and Python and leveraging API tools",
      ],
    },
    {
      title: "Co-President",
      company_name: "Blockchain at McGill",
      icon: bam,
      iconBg: "#000000",
      date: "September 2023 - Present",
      points: [
        'Organized and co-led the McGill Hackathon Team competing at University of Pennsylvania’s Blockchain Hackathon',
        'Took the role of front-end developer using React.js and Figma, taking our project up to the final rounds',
        'Coordinated networking and career-launching events for over 1000 students with firms including Binance, Coinbase, & Axelar while collaborating with Women in Blockchain',
      ],
    },
    {
      title: "Investment Analyst Intern",
      company_name: "AgileGTM",
      icon: agilegtm,
      iconBg: "#000000",
      date: "March - Dec 2023",
      points: [
        'Conducted and analyzed fundraising and investment opportunities, effectively assisted in raising ~$2M in cash',
        'Engineered and streamlined Web3 Accelerator fund investor pipeline process using PowerBI',
        'Organized educational and career-launching events with universities in Portugal resulting in an internal company hire'
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
      name: "Course Champ Web App",
      description:
        "Scalable bilingual course rating platform using Agile methodologies, Java, RESTful web services, Spring Boot, and Vue.js, enabling students to review and rate courses. Focused on a Test-Driven Development approach, creating service tests with Spring Boot and Mockito to ensure proper functionality. Employed PostgreSQL as the database system for data storage, retrieval, and manipulation",
      tags: [
        {
          name: "Vue.js",
          color: "blue-text-gradient",
        },
        {
          name: "java",
          color: "green-text-gradient",
        },
        {
          name: "SpringBoot",
          color: "pink-text-gradient",
        },
      ],
      image: coursechamp,
      source_code_link: "https://github.com/Emilien-T/CourseChamp",
    },
    {
      name: "Hotel Booking ",
      description:
        "Developed a web app for a hotel booking system using RESTful web services created in Spring. Implemented business logic in-service classes, developing the RESTful API and server-side functionalities using Java. Utilized PostgreSQL as the database system for data storage, retrieval, and manipulation. Implemented unit backend testing with JUnit and Mockito framework for isolated functionality testing. Used Vue.js for frontend development to create interactive and dynamic user interfaces",
      tags: [
        {
          name: "RESTapi",
          color: "blue-text-gradient",
        },
        {
          name: "java",
          color: "green-text-gradient",
        },
        {
          name: "spring",
          color: "pink-text-gradient",
        },
      ],
      image: hotelbooking,
      source_code_link: "https://github.com/sofiavelasquezsierra",
    },
    {
      name: "Dive Safe",
      description:
        "Coordinated a multifaceted project using Java, Umple for domain modeling and state machine design, SQL with. Oracle for database management, and React for the user interface. Improved the controller layer by implementing Gherkin step definitions. Led a comprehensive testing strategy, including acceptance tests and functional testing of the user interface",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "git",
          color: "green-text-gradient",
        },
        {
          name: "sql",
          color: "pink-text-gradient",
        },
      ],
      image: divesafe,
      source_code_link: "https://github.com/sofiavelasquezsierra",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };