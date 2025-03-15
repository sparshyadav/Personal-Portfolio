import { useState } from 'react'
import './Education.scss'
import { GraduationCap, Dot } from 'lucide-react';

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
        designation: "Bachelor's of Engineering - Computer Science Engineering",
        company: "Chitkara University",
        location: "Rajpura, Punjab",
        timeline: "09.2021 - Current",
        description: [
            "CGPA: 9.2"
        ]
    },
    {
        id: 2,
        designation: "Higher Secondary Schooling",
        company: "Shanti Niketan Vidyapeeth",
        location: "Meerut, Uttar Pradesh",
        timeline: "04.2020 - 02.2021",
        description: [
            "Passing Percentage: 85%"
        ]
    }
];

function Education() {
    const [openCard, setOpenCard] = useState<number | null>(null);

    const toggleCard = (cardId: number): void => {
        setOpenCard(openCard === cardId ? null : cardId);
    };

    return (
        <div className='work-main-container'>
            <div className='work-center-container'>
                <div className='work-upper-container'>
                    <GraduationCap className='icon' />
                    <p className='upper-heading'>Education</p>
                </div>

                <div className='work-lower-container'>
                    <div className='work-lower-center-container'>
                        {workExperience.map((job) => (
                            <div key={job.id} className='work-card'>
                                <div className='work-card-image'>
                                    <div className='work-card-image-container'>
                                        <GraduationCap className='icons logo-icon' />
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
}

export default Education
