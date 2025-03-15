import React, { useState } from 'react';
import { Briefcase, Dot } from 'lucide-react';
import './Work.scss';

interface WorkExperience {
    id: number;
    designation: string;
    company: string;
    location: string;
    timeline: string;
    description: string[];
}

const workExperience: WorkExperience[] = [
    {
        id: 1,
        designation: "Software Developer",
        company: "Magic Software",
        location: "Noida, Uttar Pradesh",
        timeline: "04.2024 - Current",
        description: [
            "Developed robust, scalable, modular, and API-centric infrastructures, improving system performance by 30%.",
            "Conducted thorough code reviews for projects, identifying and implementing improvements that enhanced code quality and reduced bugs by 25%.",
            "Led knowledge-sharing sessions for a team of 15 engineers, streamlining project completion and reducing turnaround time by 20%.",
            "Mentored 50+ engineers on Shell Scripting, Core and Advanced Java, Basics of JavaScript, Node, React, and Data Structures & Algorithms, resulting in improved team proficiency and faster project delivery.",
            "Designed and optimized data models and database schemas for complex data storage and retrieval, ensuring data integrity and accessibility for the applications."
        ]
    },
    {
        id: 2,
        designation: "Software Developer",
        company: "Microsoft",
        location: "Gurugram, Haryana",
        timeline: "08.2024 - Current",
        description: [
            "Developed robust, scalable, modular, and API-centric infrastructures, improving system performance by 30%.",
            "Conducted thorough code reviews for projects, identifying and implementing improvements that enhanced code quality and reduced bugs by 25%.",
            "Led knowledge-sharing sessions for a team of 15 engineers, streamlining project completion and reducing turnaround time by 20%.",
            "Mentored 50+ engineers on Shell Scripting, Core and Advanced Java, Basics of JavaScript, Node, React, and Data Structures & Algorithms, resulting in improved team proficiency and faster project delivery.",
            "Designed and optimized data models and database schemas for complex data storage and retrieval, ensuring data integrity and accessibility for the applications."
        ]
    }
];

const Work: React.FC = () => {
    const [openCard, setOpenCard] = useState<number | null>(null);

    const toggleCard = (cardId: number): void => {
        setOpenCard(openCard === cardId ? null : cardId);
    };

    return (
        <div className='work-main-container'>
            <div className='work-center-container'>
                <div className='work-upper-container'>
                    <Briefcase className='icon' />
                    <p className='upper-heading'>Work History</p>
                </div>

                <div className='work-lower-container'>
                    <div className='work-lower-center-container'>
                        {workExperience.map((job) => (
                            <div key={job.id} className='work-card'>
                                <div className='work-card-image'>
                                    <div className='work-card-image-container'>
                                        <Briefcase className='icons logo-icon' />
                                    </div>
                                </div>
                                <div className='work-card-details'>
                                    <p className='work-card-designation'>{job.designation}</p>
                                    <p className='work-card-company'>{job.company}</p>
                                    <p className='work-card-location'>{job.location}</p>
                                    <p className='work-card-timeline'>{job.timeline}</p>
                                    <p
                                        className='work-card-description'
                                        onClick={() => toggleCard(job.id)}
                                    >
                                        {openCard === job.id ? "Hide Description" : "Show Description"}
                                    </p>
                                    {openCard === job.id && (
                                        <>
                                            <div className='expanded-border'></div>
                                            <ul className='work-card-points'>
                                                {job.description.map((point, index) => (
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

export default Work;
