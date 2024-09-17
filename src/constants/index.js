import { meta, shopify, starbucks, tesla, xforce, hopeboat, cruise, ucsd, ucsd_seal, occ, hopeboat_new, film, movie, hopeboat_clean, hopeboat_white, hopeboat_border, hopeboat_border_2 } from "../assets/images";
import {
    car,
    user,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    three,
    python,
    oo7,
    gmail,
    eth
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
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
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
        imageUrl: python,
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
        // icon: hopeboat_white,
        // icon: hopeboat_clean,
        // icon: hopeboat,
        iconBg: "#fbc3bc",
        date: "June 2017 - July 2020",
        points: [
            "Implemented marketing strategies that boosted the company’s online presence, resulting in increased bookings through referrals and social media engagement.",
            "Created and optimized content for social media platforms, growing brand awareness and engagement.",
            "Analyzed campaign performance to provide actionable insights to enhance marketing efforts.",
            // "Strategized and executed multi-platform campaigns to boost brand visibility and engagement.",
            // "Analyzed metrics and consumers insights to optimize SEO, SEM, and social media strategies.",
            // "Collaborated cross-functionally to align digital initiatives with business goals.",
        ],
    },

    {
        title: "Founder/Film Maker",
        company_name: "Films Avenue Studio",
        company_link: "https://minhlucart.wixsite.com/home",
        // icon: movie,
        icon: film,
        // icon: cruise,
        iconBg: "#627c85",
        date: "Jan 2017 - March 2020",
        points: [

            "Managed all aspects of business operations, from client acquisition to project delivery.",
            "Worked closely with couples to understand their vision and tailored wedding films to reflect their unique personalities.",
            "Captured and edited wedding films with a focus on storytelling, pacing, and emotional impact, creating a compelling and memorable narrative for each couple.",
        ],
    },


    // {
    //     title: "Bartender/Deckhand",
    //     company_name: "Electra Cruises",
    //     icon: cruise,
    //     iconBg: "#ABD4F8",
    //     date: "Dec 2017 - Dec 2019",
    //     points: [
    //         "Managed inventory, stocked supplies, and maintained cleanliness of the bar area, adhering to sanitation and safety standards.",
    //         "Provided exceptional customer service by serving beverages and attending to passengers' needs aboard the vessel.",
    //         "Assisted with deck operations, including mooring, anchoring, and general maintenance tasks, ensuring a safe and enjoyable experience for all guests.",
    //         ,
    //     ],
    // },

];

export const educations = [
    {
        title: "University of California, San Diego",
        company_name: "Data Science (B.S.)",
        // company_name_2: "Math & Business (A.S.)",
        icon: ucsd_seal,
        // icon: ucsd,
        // icon: ucsd,
        iconBg: "#5F4868",
        date: "September 2021 - April 2024",

    },
    {
        title: "Orange Coast College",
        company_name: "Art & Animation (A.A.)",
        company_name_2: "Math & Business (A.S.)",
        icon: occ,
        iconBg: "white",
        date: "September 2017 - June 2021",

        points: [

            "Managed all aspects of business operations, from client acquisition to project delivery.",
            "Worked closely with couples to understand their vision and tailored wedding films to reflect their unique personalities.",
            "Captured and edited wedding films with a focus on storytelling, pacing, and emotional impact, creating a compelling and memorable narrative for each couple.",
        ],
    },

];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: gmail,
        // link: '/contact',
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
        // iconUrl: pricewise,
        theme: 'btn-back-red',
        name: '3D Web Portfolio',
        info: 'React, Three.js, Tailwind',
        link: 'https://github.com/thatmeanlook/3d_web',
        description: 'Developed a portfolio website using React and Three.js, exploring the integration of immersive models and animations. ',
        tech: 'I had a lot of fun working on this project while learning a ton about frontend development with React and Three.js.',
        // tech: 'This project provided hands-on experience in frontend development with React and incorporating dynamic graphics using Three.js.',

    },


    {
        iconUrl: eth,
        theme: 'btn-back-green',
        name: 'Ethereum Micropayment',
        info: 'HTML, CSS, JS, Solidity',
        link: 'https://medhaupadhyay.github.io/Micropayment-Channel-Public-Website/',
        description: 'An innovative solution allows multiple Ethereum transactions without numerous commits on a blockchain, reducing costs and streamlining the process for sending small payments to trusted parties.',
        tech: '',
        // tech: ' Enhanced model efficiency and scalability for large datasets through optimization techniques, including the creation of a baseline uniform and unigram language model.',
    },

    {
        iconUrl: oo7,
        theme: 'btn-back-blue',
        // theme: 'red',
        name: '"Bond. James Bond"',
        info: 'HTML, CSS, JS',
        link: 'https://thatmeanlook.github.io/james_bond/',
        // description: 'Analyzed the performance of the 007 movie franchise and \
        // created visualizations to communicate results.',
        description: "Conducted comprehensive data analysis on the performance metrics of the 007 movie franchise, utilizing various statistical methods and visualization tools to extract insights and trends. ",

        tech: '',
        // tech: 'The project aimed to provide stakeholders with actionable insights into the box office performance, critical reception, and overall success of the iconic film series.',


    },

];