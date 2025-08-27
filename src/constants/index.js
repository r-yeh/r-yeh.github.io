import GrocerySpendingTracker from '../assets/images/grocery-spending-tracker.png';
import TeachAI from '../assets/images/teach-ai.png';

export const github_url = "https://github.com/r-yeh";

export const linkedin_url = "https://www.linkedin.com/in/ryan-yeh-2008/";

const opg_experience = [
    "Spearheaded the development of a web dashboard that streamlined tasks performed by the Fuel Handling Operations team by consolidating critical data for improved accessibility and efficiency using Angular/ASP.NET.",
    "Created 3 dynamic Power BI dashboards, enabling tracking and analysis of key metrics, including project spending",
    "Automated complex, repetitive tasks by implementing VBA macros in Excel spreadsheets, reducing manual effort and increasing productivity"
];

const ministry_experience = [
    "Built and maintained a web application to help Ontario healthcare facilities create and manage financial templates and data using the MERN stack",
    "Led development of platform organization management functionality and corresponding database CRUD resulting in streamlined user workflows",
    "Enhanced database query performance related to organization management, resulting in a 30% improvement in retrieval speed",
    "Developed and maintained a Postman test suite consisting of 15+ tests to ensure backend reliability and functionality",
    "Led discussion during daily stand-ups, enhancing team collaboration"
];

const sentry_health_experience = [
    "Developed and maintained 30+ regression tests using Cypress and Postman, reducing QA workload and streamlining the testing process",
    "Conducted manual unit and integration testing on 20+ work items per sprint",
    "Led development of a web application for managing an internal pharmacy database with 100+ records, enabling staff to easily CRUD Firestore data using Vue/Vuetify for the frontend and GraphQL for the backend",
    "Built an application to convert PDFs to base64 and send data to an online fax endpoint, reducing manual workload for clinic staff using Node.js",
    "Automated file uploads to Firestore by creating a Node-RED workflow that monitors and processes new files, eliminating manual administrative tasks",
    "Used Jira to track bugs and manage development tasks, improving team visibility and ensuring faster issue resolution during sprints"
];

export const experience = [
    {
        title: 'Data & Software Development Intern',
        company: 'Ontario Power Generation',
        duration: 'May 2024 - August 2024',
        points: opg_experience,
    },
    {
        title: 'Software Developer Co-op Student',
        company: 'Ontario Ministry of Health',
        duration: 'May 2023 - August 2023',
        points: ministry_experience,
    },
    {
        title: 'Software Engineer & QA Intern',
        company: 'Sentry Health',
        duration: 'May 2021 - August 2022',
        points: sentry_health_experience,
    }

];

export const tools = ['Python', 'JavaScript', 'React', 'Postman', 'HTML/CSS', 'Java', 'Dart'];

export const projects = [
    {
        title: 'Grocery Spending Tracker',
        image:GrocerySpendingTracker,
        description: 'A mobile application designed to help users track and categorize their grocery spending via photos of receipts. It allows users to track and analyze personal spending trends and set goals, allowing them to better deal with the ever-rising cost of food.',
        tags: ['Flutter', 'JavaScript', 'PostgreSQL', 'Git'],
        url: 'https://github.com/grocery-spending-tracker/grocery-spending-tracker'
    },
    {
        title: 'TeachAI',
        image:TeachAI,
        description: 'A web application designed for teachers that uses the OpenAI API to generate a step-by-step plan on how to teach others any given concept or skill.',
        tags: ['React', 'JavaScript', 'HTML', 'CSS', 'Git'],
        url: 'https://github.com/r-yeh/teachAI'
    }
];