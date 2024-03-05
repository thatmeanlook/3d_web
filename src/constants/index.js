import { meta, shopify, starbucks, tesla, xforce, hopeboat, cruise, ucsd, ucsd_seal, occ } from "../assets/images";
import {
    car,
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
    python
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

    {  // LEARN THIS ONE
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },

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
        company_name: "National Security Inovation Network (NSIN)",
        icon: xforce,
        iconBg: "#5F4868",
        date: "June 2022 - August 2022",
        points: [
            "Organized and analyzed large-scale high-dimensional datasets.",
            "Developed an algorithm proficiently to identify structural features within network graphs, enhancing data interpretation and visualization.",
            "Implemented machine learning models to extract actionable insights and patterns from complex data sets."
        ],
    },
    {
        title: "Digital Marketing Specialist",
        company_name: "Hopeboat Productions",
        icon: hopeboat,
        iconBg: "#fbc3bc",
        date: "June 2017 - July 2020",
        points: [

            "Strategized and executed multi-platform campaigns to boost brand visibility and engagement.",
            "Analyzed metrics and consumers insights to optimize SEO, SEM, and social media strategies.",
            "Collaborated cross-functionally to align digital initiatives with business goals.",
        ],
    },
    {
        title: "Bartender/Deckhand",
        company_name: "Electra Cruises",
        icon: cruise,
        iconBg: "#ABD4F8",
        date: "Dec 2017 - Dec 2019",
        points: [
            "Provided exceptional customer service by serving beverages and attending to passengers' needs aboard the vessel.",
            "Assisted with deck operations, including mooring, anchoring, and general maintenance tasks, ensuring a safe and enjoyable experience for all guests.",
            "Managed inventory, stocked supplies, and maintained cleanliness of the bar area, adhering to sanitation and safety standards.",
        ],
    },

];

export const educations = [
    {
        title: "University of California, San Diego",
        company_name: "Data Science (B.S.)",
        icon: ucsd_seal,
        // icon: ucsd,
        iconBg: "#5F4868",
        date: "September 2021 - April 2024",

    },
    {
        title: "Orange Coast College",
        company_name: "Art & Animation (A.A.), Math & Business (A.S.)",
        icon: occ,
        iconBg: "white",
        date: "September 2019 - June 2021",

    },

];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: '3D Web Portfolio',
        description: 'Developed a portfolio website using React and Three.js, exploring the integration of immersive models and animations. ',
        tech: 'This project provided hands-on experience in frontend development with React and incorporating dynamic graphics using Three.js.',

        points: [
            "Work closely with captains to ensure the cruise operates smoothly.",
            "Interact with bar guests, take orders and serve drinks.",
            "Monitor guest experience and ensure high standard service at all time.",
        ],
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Natural Language Model',
        description: 'Developed an object-oriented N-gram language model in Python, employing regular expressions to tokenize and prepare corpuses for training.',
        tech: ' Enhanced model efficiency and scalability for large datasets through optimization techniques, including the creation of a baseline uniform and unigram language model.',

        points: [
            "Work closely with captains to ensure the cruise operates smoothly.",
            "Interact with bar guests, take orders and serve drinks.",
            "Monitor guest experience and ensure high standard service at all time.",
        ],
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: '"Bond. James Bond"',
        description: 'Analyzed the performance of the 007 movie franchise and \
        created visualizations to communicate results.',
        tech: 'Tech: Python, HTML, CSS, JS',

        points: [
            "Work closely with captains to ensure the cruise operates smoothly.",
            "Interact with bar guests, take orders and serve drinks.",
            "Monitor guest experience and ensure high standard service at all time.",
        ],
        link: 'https://thatmeanlook.github.io/james_bond/',
    },

];