import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NotificationModal from '../NotificationModal/NotificationModal';
import { useNotification } from '../../context/NotificationContext';
import './Navbar.css'

//Icons
import { FaBell } from 'react-icons/fa';


const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { notifications } = useNotification();
    const unreadCount = notifications.filter(n => !n.read).length;

    return (
        <nav className="navbar">
            <div className="navbar__wrapper">
                <div className="navbar__left">
                    <Link to="/" className='navbar__logo'>My App</Link>
                </div>
                <div className={`navbar__right`}>
                    <div className={`navbar__icon-wrapper ${unreadCount > 0 && 'bg-blue-100 animate-pulse duration-500 delay-1000'}`}>
                        <FaBell className={`navbar__icon`} onClick={() => setIsOpen(!isOpen)} />
                        {unreadCount > 0 && (
                            <span className="navbar__count">
                                {unreadCount}
                            </span>
                        )}
                    </div>
                    <div className={`navbar__modal ${isOpen && 'navbar__modal--open'}`}>
                        <NotificationModal onClose={() => setIsOpen(false)} />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
