import './Overview.scss';
import { NotebookTabs } from 'lucide-react';

function Overview() {
    return (
        <div className='overview-main-container'>
            <div className='overview-center-container'>
                <div className='overview-upper-container'>
                    <NotebookTabs className='icon' />
                    <p className='upper-heading'>Overview</p>
                </div>
                <div className='overview-lower-container'>
                    <div className='overview-lower-center-container'>
                        <div className='overview-card'>
                            <div className='overview-card-number'>1</div>
                            <div className='overview-card-text'>YEARS OF PROFESSIONAL EXPERIENCE</div>
                            <div className='overview-opacity'>1</div>
                        </div>
                        <div className='overview-card'>
                            <div className='overview-card-number'>4</div>
                            <div className='overview-card-text'>YEARS OF POST SECONDARY EDUCATION</div>
                            <div className='overview-opacity'>4</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview
