import { NavLink } from "react-router-dom";
import "./Footer.scss"
import { Phone } from 'lucide-react';

function Footer() {
    return (
        <div className='footer-main-container'>
            <div className='footer-center-container'>
                <p className="footer-name">Sparsh Yadav</p>
                <p className="footer-profession">Software Engineer</p>
                <NavLink to={'/contact'} style={{ textDecoration: 'none' }}>
                    <div className="footer-contact">
                        <Phone className="footer-contact-icon" />
                        <p className="footer-contact-text">Contact</p>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Footer
