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
    java,
    cpp,
    python
  } from "../assets";

  import dp from "../assets/feedback/dp.jpeg"
  import pk from "../assets/feedback/pk.jpg"
  import jy from "../assets/feedback/jy.jpeg"
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "project",
      title: "Project",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Developer",
      icon: web,
    },
    {
      title: "Web Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Tech Enthusiast",
      icon: creator,
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
      name: "cpp",
      icon: cpp,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
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
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Highly impressed with Ashish's work! My portfolio website looks stunning and functions perfectly",
      name: "Deepak Puri",
      designation: "DevOps Intern",
      company: "Lernophiles",
      image: dp,
      profile_link : "https://www.linkedin.com/in/deepakpuri11/"
    },
    {
      testimonial:
        "Working with Ashish has been an absolute joy! He was always willing to go the extra mile, bringing fresh ideas and a can-do spirit to every brainstorming session",
      name: "Priyank Kushwah",
      designation: "Full Stack Developer",
      company: "Virtusa",
      image: pk,
      profile_link : "https://www.linkedin.com/in/priyankushwah/"
    },
    {
      testimonial:
        "Ashish's learning attitude is a testament to his curiosity, open-mindedness, and a genuine love for knowledge.",
      name: "Jatin Yadav",
      designation: "",
      company: "Competitive Programmer",
      image: jy,
      profile_link : "https://www.linkedin.com/in/jatin-yadav01/"
    },
   
  ];
  
  const projects = [
    {
      name: "Swiggy Clone",
      description:
        "Web-based platform that allows users to search, order, and deliver from from various providers, providing a convenient and efficient solution for delivering food.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Portfolio Website",
      description:
        "Built website features a modern and minimalist design to ensure a clean and professional appearance. It uses a responsive layout to adapt seamlessly to various screen sizes, providing an optimal user experience across desktops, tablets, and mobile devices. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/ashishyadav369/reactPrac",
    },
    {
      name: "Snake Game",
      description:
        "Using the ncurses library made a fun and interactive project. It offers an enjoyable gaming experience. This project demonstrates how ncurses can be used to create engaging terminal based games while incorporating core programming concepts such as user input handling, game mechanics, and randomization.",
      tags: [
        {
          name: "C",
          color: "blue-text-gradient",
        },
        {
          name: "C++",
          color: "green-text-gradient",
        },
        {
          name: "ncurses.h",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/ashishyadav369/cppProj/tree/master/Snake",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };