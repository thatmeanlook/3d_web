import { meta, shopify, starbucks, tesla, xforce, hopeboat, cruise } from "../assets/images";
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
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
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
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "X-Force Research Fellow",
        company_name: "NGA",
        icon: xforce,
        iconBg: "#5F4868",
        date: "June 2022 - August 2022",
        points: [
            "Organized and analyzed large-scale high-dimensional datasets.",
            "Developed algorithm to identify structural features of network graphs.",
        ],
    },
    {
        title: "Digital Marketing Specialist",
        company_name: "Hopeboat Productions",
        icon: hopeboat,
        iconBg: "#fbc3bc",
        date: "June 2017 - July 2020",
        points: [
            "Communicated with clients to develop visual concepts.",
            "Measured and reported performance of all digital marketing campaigns.",
        ],
    },
    {
        title: "Bartender/Deckhand",
        company_name: "Electra Cruises",
        icon: cruise,
        iconBg: "#ABD4F8",
        date: "Dec 2017 - Dec 2019",
        points: [
            "Work closely with captains to ensure the cruise operates smoothly.",
            "Interact with bar guests, take orders and serve drinks.",
            "Monitor guest experience and ensure high standard service at all time.",
        ],
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
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        tech: 'HTML, CSS, JS',

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
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        tech: 'HTML, CSS, JS',

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