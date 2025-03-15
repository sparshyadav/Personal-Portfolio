import React from 'react'
import './Summary.scss'
import { User } from 'lucide-react';

function Summary() {
    return (
        <div className='summary-main-container'>
            <div className='summary-center-container'>
                <div className='summary-upper-container'>
                    <User className='icon' />
                    <p className='upper-heading'>Summary</p>
                </div>
                <div className='summary-lower-container'>
                    <p className='lower-summary'>Experienced with creating robust software applications tailored to client needs. Utilizes advanced coding techniques to ensure seamless performance and scalability. Strong understanding of software development lifecycle and agile methodologies.</p>
                </div>
            </div>
        </div>
    )
}

export default Summary
