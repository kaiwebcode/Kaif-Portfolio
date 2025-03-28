import // mobile,
// backend,
// creator,
// web,
// javascript,
// typescript,
// html,
// css,
// reactjs,
// redux,
// tailwind,
// nodejs,
// mongodb,
// git,
// figma,
// docker,
// meta,
// starbucks,
// tesla,
// shopify,
// carrent,
// jobit,
// tripguide,
// threejs,
"../../public/assets/web.png";

//   export const navLinks = [
//     {
//       id: "about",
//       title: "About",
//     },
//     {
//       id: "work",
//       title: "Work",
//     },
//     {
//       id: "contact",
//       title: "Contact",
//     },
//   ];

// import mobile from "../../public/assets/mobile.png";
// import backend from "../../public/assets/backend.png";
// import creator from "../../public/assets/creator.png";
// import web from "../../public/assets/web.png";

const services = [
  {
    title: "Full Stack Developer",
    icon: "/assets/web.png", // ✅ Use relative path from public/
  },
  {
    title: "Frontend Developer",
    icon: "/assets/mobile.png",
  },
  {
    title: "Backend Developer",
    icon: "/assets/backend.png",
  },
  {
    title: "Content Creator",
    icon: "/assets/creator.png",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: "/assets/html.png",
  },
  {
    name: "CSS 3",
    icon: "/assets/css.png",
  },
  {
    name: "JavaScript",
    icon: "/assets/javascript.png",
  },
  {
    name: "TypeScript",
    icon: "/assets/typescript.png",
  },
  {
    name: "React JS",
    icon: "/assets/reactjs.png",
  },
  {
    name: "Redux Toolkit",
    icon: "/assets/redux.png",
  },
  {
    name: "Tailwind CSS",
    icon: "/assets/tailwind.png",
  },
  {
    name: "Node JS",
    icon: "/assets/nodejs.png",
  },
  {
    name: "MongoDB",
    icon: "/assets/mongodb.png",
  },
  {
    name: "git",
    icon: "/assets/git.png",
  },
  {
    name: "figma",
    icon: "/assets/figma.png",
  },
  {
    name: "docker",
    icon: "/assets/docker.png",
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: "/assets/starbucks.png", // ✅ FIXED
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
    icon: "/assets/tesla.png", // ✅ FIXED
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
    icon: "/assets/shopify.png", // ✅ FIXED
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
    icon: "/assets/meta.png", // ✅ FIXED
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "text-blue-500",
        },
        {
          name: "mongodb",
          color: "text-green-500",
        },
        {
          name: "tailwind",
          color: "text-pink-500",
        },
      ],
      image: "/assets/Screenshot 2024-10-12 215151.png",
      source_code_link: "https://github.com/kaiwebcode/Kai-Ecommerce-Shoees",
      projects_link: "https://kai-ecommerce-shoees.vercel.app",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "Next.js",
          color:"text-blue-500",
        },
        {
          name: "TypeScript",
          color: "text-green-500",
        },
        {
          name: "Tailwind css",
          color: "text-pink-500",
        },
        {
          name: "Convex",
          color: "text-purple-500",
        },
      ],
      image: "/assets/Ero.io-thumbnail.png",
      source_code_link: "https://github.com/kaiwebcode/Ero.io",
      projects_link: "https://ero-io-kai.vercel.app",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "text-blue-500",
        },
        {
          name: "supabase",
          color: "text-green-500",
        },
        {
          name: "css",
          color: "text-pink-500",
        },
      ],
      image: "/assets/Screenshot 2025-03-28 152340.png",
      source_code_link: "https://github.com/kaiwebcode/Kai-E-learning-Management",
      projects_link: "https://kai-e-learning-management.vercel.app",
    },
  ];

export {
  services,
  technologies,
  experiences,
    testimonials,
     projects
};
