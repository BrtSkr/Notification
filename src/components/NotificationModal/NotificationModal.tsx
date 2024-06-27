import React, { useState } from 'react';
import { useNotification } from '../../context/NotificationContext';
import Notification from '../Notification/Notification';
import './NotificationModal.css';

//icons
import { MdClose } from "react-icons/md";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

interface NotificationModalProps {
    onClose: () => void;
}

const NotificationModal: React.FC<NotificationModalProps> = ({ onClose }) => {
    const { notifications, markAllAsRead } = useNotification();
    const [filter, setFilter] = useState<'all' | 'unread'>('all');

    const filteredNotifications = filter === 'all' ? notifications : notifications.filter(n => !n.read);

    return (
        <div className="notification-modal">
            <div className="notification-modal__header">
                <div className="notification-modal__filters">
                    <button onClick={() => setFilter('all')} className={`${filter === 'all' ? 'notification-modal__btn--active notification-modal__btn' : 'notification-modal__btn'}`}>All Notifications</button>
                    <button onClick={() => setFilter('unread')} className={`${filter === 'unread' ? 'notification-modal__btn--active notification-modal__btn' : 'notification-modal__btn'}`}>Unread</button>
                    <button onClick={markAllAsRead} className="notification-modal__mark">
                        <IoCheckmarkDoneOutline className='w-6 h-6' />
                        <span>Mark all as read</span>
                    </button>
                </div>
                <button onClick={onClose} className="notification-modal__close">
                    <MdClose className='w-8 h-8 fill-white' />
                </button>
            </div>
            <div className='notification-modal__body'>
                {filteredNotifications.map(notification => (
                    <Notification
                        key={notification.id}
                        id={notification.id}
                        message={notification.message}
                        read={notification.read}
                        type={notification.type}
                        date={notification.date}
                    />
                ))}
            </div>

        </div>
    );
};

export default NotificationModal;