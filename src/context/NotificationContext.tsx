import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import sampleNotifications from '../data/sampleNotificationData';

export interface Notification {
    id: string;
    message: string;
    read: boolean;
    type: 'request' | 'status' | 'feature';
    date: string,
}

interface NotificationContextType {
    notifications: Notification[];
    markAllAsRead: () => void;
    markAsRead: (id: string) => void;
    markAsUnread: (id: string) => void;
    addNotification: (notification: Notification) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

const NOTIFICATIONS_LIFESPAN = 24 * 60 * 60 * 1000;

const NotificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [notifications, setNotifications] = useState<Notification[]>(() => {
        const storedNotifications = localStorage.getItem('notifications');
        const storedTimestamp = localStorage.getItem('notificationsTimestamp');
        const now = Date.now();

        if (storedNotifications && storedTimestamp) {
            const age = now - parseInt(storedTimestamp, 10);
            if (age < NOTIFICATIONS_LIFESPAN) {
                return JSON.parse(storedNotifications);
            } else {
                localStorage.removeItem('notifications');
                localStorage.removeItem('notificationsTimestamp');
                return sampleNotifications;
            }
        } else {
            return sampleNotifications;
        }
    });

    useEffect(() => {
        localStorage.setItem('notifications', JSON.stringify(notifications));
        localStorage.setItem('notificationsTimestamp', Date.now().toString());
    }, [notifications]);

    const markAllAsRead = () => {
        setNotifications(notifications.map(n => ({ ...n, read: true })));
    };

    const markAsRead = (id: string) => {
        setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
    };

    const markAsUnread = (id: string) => {
        setNotifications(notifications.map(n => n.id === id ? { ...n, read: false } : n));
    };

    const addNotification = (notification: Notification) => {
        setNotifications(prev => [...prev, notification]);
    };

    return (
        <NotificationContext.Provider value={{ notifications, markAllAsRead, markAsRead, markAsUnread, addNotification }}>
            {children}
        </NotificationContext.Provider>
    );
};

const useNotification = (): NotificationContextType => {
    const context = useContext(NotificationContext);
    if (context === undefined) {
        throw new Error('useNotification must be used within a NotificationProvider');
    }
    return context;
};

export { NotificationProvider, useNotification };