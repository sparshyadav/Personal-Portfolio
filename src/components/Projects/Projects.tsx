import React, { useState } from 'react';
import { Code, Dot, Github, ExternalLink } from 'lucide-react';
import './Projects.scss'

interface Project {
    id: number;
    title: string;
    description: string;
    date: string;
    githubLink: string;
    liveLink: string;
    details: string[];
}

const projectsData: Project[] = [
    {
        id: 1,
        title: "BookStore: E-commerce Platform",
        description: "A full-stack e-commerce solution with React, Redux Toolkit for Books",
        date: "03.2024 - 03.2024",
        githubLink: "https://github.com/sparshyadav/BookStore",
        liveLink: "https://github.com/sparshyadav/BookStore",
        details: [
            "Built responsive UI with React and Redux for state management",
            "Implemented secure payment processing with Stripe API",
            "Created RESTful API endpoints with Express.js and MongoDB",
            "Added user authentication with JWT and password encryption",
            "Integrated automated testing with Jest and React Testing Library"
        ]
    },
    {
        "id": 2,
        "title": "Fundoo Notes: Notes Taking App",
        "description": "A feature-rich Google Keep-style note-taking application.",
        "date": "09.2023 - 09.2023",
        "githubLink": "https://github.com/sparshyadav/Sparsh_FundooNotes_Frontend",
        "liveLink": "https://fundoonotes.vercel.app/",
        "details": [
            "Built a fully responsive React-based note-taking app with a clean and intuitive UI.",
            "Implemented authentication & authorization using JWT for secure user login and signup.",
            "Integrated MUI components for a polished and modern user interface.",
            "Enabled CRUD operations (Create, Read, Update, Delete) for notes with an intuitive UX.",
            "Added labels and categories to organize notes efficiently.",
            "Implemented reminders and archive/trash features to manage notes effectively.",
            "Used Axios for API communication and handled error states gracefully.",
            "Integrated React Router for smooth navigation between different app sections.",
            "Deployed the app on Vercel, ensuring fast performance and accessibility."
        ]
    },
    {
        "id": 3,
        "title": "Resume Builder: AI-Powered Resume Generator",
        "description": "A dynamic web application for creating professional resumes with customizable templates.",
        "date": "10.2023 - 11.2023",
        "githubLink": "https://github.com/sparshyadav/ResumeBuilder",
        "liveLink": "https://resumeebuilder.vercel.app/",
        "details": [
            "Developed an interactive resume builder using React for a seamless user experience.",
            "Implemented drag-and-drop sections for flexible resume customization.",
            "Integrated dynamic form inputs for users to enter and update their details in real-time.",
            "Used MUI and Tailwind CSS to create a modern and responsive UI.",
            "Enabled PDF export functionality for easy resume downloads.",
            "Implemented local storage support to save user progress.",
            "Integrated React Router for smooth navigation between different sections.",
            "Deployed on Vercel, ensuring high availability and fast performance."
        ]
    },        
    {
        id: 4,
        title: "Listify: Task Management App",
        description: "A Kanban-style project management tool",
        date: "09.2023 - 9.2023",
        githubLink: "https://github.com/sparshyadav/Listify",
        liveLink: "https://listify-todo.vercel.app/",
        details: [
            "Developed drag-and-drop interface with React DnD",
            "Created real-time updates with Socket.io",
            "Implemented user role management system",
            "Built responsive design for mobile and desktop",
            "Added data visualization for project progress tracking"
        ]
    }
];

const Projects: React.FC = () => {
    const [openCard, setOpenCard] = useState<number | null>(null);

    const toggleCard = (cardId: number): void => {
        setOpenCard(openCard === cardId ? null : cardId);
    };

    return (
        <div className='work-main-container'>
            <div className='work-center-container'>
                <div className='work-upper-container'>
                    <Code className='icon' />
                    <p className='upper-heading'>Projects</p>
                </div>

                <div className='work-lower-container'>
                    <div className='work-lower-center-container'>
                        {projectsData.map((project) => (
                            <div key={project.id} className='work-card'>
                                <div className='work-card-image'>
                                    <div className='work-card-image-container'>
                                        <Code className='icons logo-icon' />
                                    </div>
                                </div>
                                <div className='work-card-details'>
                                    <p className='work-card-designation'>{project.title}</p>
                                    <p className='work-card-company'>{project.description}</p>
                                    <p className='work-card-timeline'>{project.date}</p>
                                    <div className='work-card-links'>
                                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className='work-card-link'>
                                            GitHub <Github size={16} />
                                        </a>
                                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className='work-card-link'>
                                            Live Preview <ExternalLink size={16} />
                                        </a>
                                    </div>
                                    <p
                                        className='work-card-description'
                                        onClick={() => toggleCard(project.id)}
                                    >
                                        {openCard === project.id ? "Hide Details" : "Show Details"}
                                    </p>
                                    {openCard === project.id && (
                                        <>
                                            <div className='expanded-border'></div>
                                            <ul className='work-card-points'>
                                                {project.details.map((point, index) => (
                                                    <li key={index} className="work-card-point">
                                                        <span className="dot-icon"><Dot /></span> {point}
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;