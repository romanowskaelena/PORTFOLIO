import {
    RxCrop,
    RxDesktop,
    RxPencil2,
    RxReader,
    RxRocket,
    RxAccessibility,
    RxHome,
    RxPerson,
    RxDashboard,
  } from "react-icons/rx";
  
  export const Socials = [
    {
      name: "Discord",
      src: "/assets/discord.svg",
      link: "https://discord.com/channels/1081271040497434785/1086236733181538364"
    },
    {
      name: "Linkedin",
      src: "/assets/linkedin.svg",
      link: "https://www.linkedin.com/in/elena-romanowska-9b788329b/"
    },
    {
      name: "GitHub",
      src: "/assets/github.svg",
      link: "https://github.com/romanowskaelena/Projects"
    },
  ];
  
  export const NavLinks = [
    {
      name: "Home",
      icon: RxHome,
      link: "/",
    },
    {
      name: "About me",
      icon: RxPerson,
      link: "/about-me",
    },
    {
      name: "Projects",
      icon: RxDashboard,
      link: "/my-projects",
    },
  ];
  
  export const ProImages = [
    {//мой диплой
      name: 'garden-project',
      src: "/assets/projects/project1-garden.png",
      link: 'https://project-garten.vercel.app/'
    },
    {
      name: 'project coffee',
      src: "/assets/projects/project2-coffee.png",
      link: 'https://coffee-self-five.vercel.app/'
    },
    {
      name: 'project layout',
      src: "/assets/projects/project3-johnDoe.jpg",
      link: 'https://verstka-doe.vercel.app/'
    },
    {
      name: 'project layout',
      src: "/assets/projects/project4-comfort.jpg",
      link: 'https://verstka-comfort.vercel.app/'
    },
  ];
  
  export const ProImages2 = [
    {
      name: 'project layout',
      src: "/assets/projects/project5-architect.jpg",
      link: 'https://verstka-architect.vercel.app/'
    },
    {
      name: 'project',
      src: "/assets/projects/project2-backpack-shop.png",
      link: 'https://exam-project-garden.vercel.app'
    },
    {
      name: 'project',
      src: "/assets/projects/template3.jpg",
      link: '#'
    },
    {
      name: 'project',
      src: "/assets/projects/template4.jpg",
      link: '#'
    },
  ];
  
  export const ServiceData = [
   
    {
      icon: RxCrop,
      title: "Development",
      content: "Building responsive web applications using modern technologies such as React, Next.js and TypeScript",
      backgroundImage: "/assets/skills/square-2.jpg",
    },
  
    {
      icon: RxDesktop,
      title: "Design",
      content: "Development of intuitive interfaces with an emphasis on user experience and modern principles of UI/UX design",
      backgroundImage: "/assets/skills/square-4.jpg",
    },
    {
      icon: RxAccessibility,
      title: "Management",
      content: "Organization of the development process, task planning and quality control, teamwork",
      backgroundImage: "/assets/skills/square-5.jpg",
    },
    {
      icon: RxRocket,
      title: "Production",
      content: "Launch and optimization of finished projects, visual presentation to the customer",
      backgroundImage: "/assets/skills/square-6.jpg",
    },
  ];