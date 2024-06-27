import React from 'react';
import { Link } from 'react-router-dom';
import { useNotification } from '../../context/NotificationContext';
import './Notification.css';


interface NotificationProps {
  id: string;
  message: string;
  read: boolean;
  type: 'request' | 'status' | 'feature';
  date: string,
}

const Notification: React.FC<NotificationProps> = ({ id, message, read, type, date }) => {
  const { markAsRead, markAsUnread } = useNotification();

  const handleReadClick = () => {
    markAsRead(id);
  };

  const handleUnreadClick = () => {
    markAsUnread(id);
  };

  const getLink = () => {
    switch (type) {
      case 'request':
        return '/request';
      case 'status':
        return '/status';
      case 'feature':
        return '/feature';
      default:
        return '/';
    }
  };

  return (
    <div className={`notification ${read ? 'bg-white read' : 'bg-gray-100'}`}>
      <Link to={getLink()} onClick={handleReadClick} className="notification__link">
        <span className={`notification__message ${read === false && 'font-semibold'}`}>{message}</span>
        <div className="notification__minor-details">
          <span className='notification__date'>{date}</span>
          <span className='notification__type'>{type}</span>
        </div>
      </Link>
      <button
        onClick={(e) => {
          e.stopPropagation();
          read ? handleUnreadClick() : handleReadClick();
        }}
        className={`notification__read-btn ${read === false ? 'notification__read-btn--read' : 'notification__read-btn--unread'}`}
      >
        {read ? 'Unread' : 'Read'}
      </button>
    </div>
  );
};

export default Notification;
