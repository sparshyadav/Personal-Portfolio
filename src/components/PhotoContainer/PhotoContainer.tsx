import './PhotoContainter.scss';
import profilePic from '../../assets/profile-pic.jpg';
import { Briefcase, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function PhotoContainer() {
    const navigate=useNavigate();
    return (
        <div className='photo-main-container'>
            <div className='photo-center-container'>
                <div className='photo-upper-pic-container'>
                    <div className='upper-pic-banner'>
                        <img src='https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?cs=srgb&dl=pexels-lkloeppel-466685.jpg&fm=jpg' alt='Image Not Available' />
                    </div>
                    <div className='upper-pic-profile'>
                        <img src={profilePic} alt='Profile Picture' />
                    </div>
                </div>
                <div className='photo-lower-detail-container'>
                    <div className='lower-details'>
                        <div className='lower-details-name'>Sparsh Yadav</div>
                        <div className='lower-details-info'>
                            <div className='lower-details-designation'>
                                <Briefcase className='icons' />
                                <p className='lower-details-data'>Software Developer</p>
                            </div>
                            <div className='lower-details-location'>
                                <MapPin className='icons' />
                                <p className='lower-details-data'>Meerut, U.P.</p>
                            </div>
                        </div>
                    </div>
                    <div className='lower-contact'>
                            <button onClick={()=>navigate('/contact')}>Contact Me</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhotoContainer
