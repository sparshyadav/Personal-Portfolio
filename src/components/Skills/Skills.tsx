import './Skills.scss'
import { CircleDot, Zap } from 'lucide-react';

function Skills() {
    const skills = ["HTML", "CSS", "Javascript", "C/C++", "Java", "Git/Github", "Jquery", "React", "Node", "Express", "SQL", "MongoDB", "Tailwind", "Git Proficiency", "API Integration", "Axios", "Object Oriented Programming", "Database Management System", "Computer Networks", "Operating System", "ORM"]
    return (
        <div className='skills-main-container'>
            <div className='skills-center-container'>
                <div className='skills-upper-container'>
                    <Zap className='icon' />
                    <p>Skills</p>
                </div>
                <div className='skills-lower-container'>
                    {skills.map((skill) => (
                        <div className='skill-container'>
                            <div className='skill-icon'><CircleDot /></div>
                            <div className='skill-text'>{skill}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills
