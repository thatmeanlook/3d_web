import { xforce, ucsd_seal, occ, film, hopeboat_border_2 } from "../assets/images";
import {
    user,
    css,
    github,
    html,
    javascript,
    linkedin,
    react,
    three,
    oo7,
    eth,
    gmail2,
    python2,
    tailwindcss,
    figma
} from "../assets/icons";

export const skills = [

    // {
    //     imageUrl: express,
    //     name: "Express",
    //     type: "Backend",
    // },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    // {
    //     imageUrl: nodejs,
    //     name: "Node.js",
    //     type: "Backend",
    // },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: three,
        name: "Three.js ",
        type: "3D library",
    },
    // {
    //     imageUrl: git,
    //     name: "Git",
    //     type: "Version Control",
    // },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },


    // {
    //     imageUrl: mongodb,
    //     name: "MongoDB",
    //     type: "Database",
    // },


    // {   // LEARN THIS ONE
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    // },

    // {
    //     imageUrl: mui,
    //     name: "Material-UI",
    //     type: "Frontend",
    // },

    // {  // LEARN THIS ONE
    //     imageUrl: nextjs,
    //     name: "Next.js",
    //     type: "Frontend",
    // },

    // {
    //     imageUrl: redux,
    //     name: "Redux",
    //     type: "State Management",
    // },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },

    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },

    {
        imageUrl: figma,
        name: "Figma",
        type: "Frontend",
    },

    {
        imageUrl: python2,
        name: "Python",
        type: "Backend",
    },
    // {
    //     imageUrl: typescript,
    //     name: "TypeScript",
    //     type: "Frontend",
    // }
];

export const experiences = [
    {
        title: "X-Force Research Fellow",
        company_name: "National Security Innovation Network (NSIN)",
        company_link: "https://nsin.mil/x-force/",
        icon: xforce,
        iconBg: "#5F4868",
        date: "June 2022 - August 2022",
        points: [
            "Developed algorithms to identify structural features within network graphs, enhancing data interpretation and visualization.",
            "Implemented machine learning models to extract actionable insights and patterns from complex data sets.",
            "Prepared and presented comprehensive reports and visualizations of analytical results to stakeholders.",
        ],
    },
    {
        title: "Digital Marketing Specialist",
        company_name: "Hopeboat Productions",
        company_link: "https://www.hopeboatproductions.com/",
        icon: hopeboat_border_2,
        iconBg: "#fbc3bc",
        date: "June 2017 - July 2020",
        points: [
            "Implemented marketing strategies that boosted the company’s online presence, resulting in increased bookings through referrals and social media engagement.",
            "Created and optimized content for social media platforms, growing brand awareness and engagement.",
            "Analyzed campaign performance to provide actionable insights to enhance marketing efforts.",

        ],
    },

    {
        title: "Founder/Film Maker",
        company_name: "Films Avenue Studio",
        company_link: "https://minhlucart.wixsite.com/home",
        icon: film,
        iconBg: "#627c85",
        date: "Jan 2017 - March 2020",
        points: [
            "Managed all aspects of business operations, from client acquisition to project delivery.",
            "Directed and produced custom wedding films, overseeing every phase from initial consultation to final editing.",
            "Built and maintained strong client relationships, resulting in a high rate of referrals and repeat business."
        ],
    },


];

export const educations = [
    {
        title: "University of California, San Diego",
        company_name: "Data Science (B.S.)",
        icon: ucsd_seal,
        iconBg: "#5F4868",
        date: "June 2024",

    },
    {
        title: "Orange Coast College",
        company_name: "Art & Animation (A.A.)",
        company_name_2: "Math & Business (A.S.)",
        icon: occ,
        iconBg: "white",
        date: "June 2017",
    },

];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: gmail2,
        link: 'mailto:MinhLucArt@gmail.com',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/thatmeanlook',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://linkedin.com/in/minhluc',
    }
];

export const projects = [
    {
        iconUrl: user,
        theme: 'btn-back-red',
        name: '3D Web Portfolio',
        info: 'React, Three.js, TailwindCSS',
        link: 'https://github.com/thatmeanlook/3d_web',
        description: 'Designed and developed a responsive 3D portfolio website, integrating immersive models and animations to enhance interactivity and user engagement.',
        tech: 'Ensured cross-browser compatibility and responsiveness, optimizing the website for different devices and screen sizes.',
    },


    {
        iconUrl: eth,
        theme: 'btn-back-green',
        name: 'Ethereum Micropayment',
        info: 'HTML, CSS, JS, Solidity',
        link: 'https://medhaupadhyay.github.io/Micropayment-Channel-Public-Website/',
        description: 'A solution that utilizes smart contracts in Solidity to enable multiple Ethereum transactions without repeated blockchain commits, optimizing transaction efficiency.',
        tech: 'Integrated MetaMask for seamless user authentication and deployed the micropayment channel to facilitate secure transactions',
    },

    {
        iconUrl: oo7,
        theme: 'btn-back-blue',
        // theme: 'red',
        name: '"Bond. James Bond"',
        info: 'HTML, CSS, JS, D3',
        link: 'https://thatmeanlook.github.io/james_bond/',
        description: "Conducted a comprehensive data analysis on the performance metrics of the 007 movie franchise, utilizing various statistical methods and visualization tools to extract insights and trends. ",
        tech: '',
    },

];