import { Notification } from "../context/NotificationContext";

const sampleNotifications: Notification[] = [
    { id: '1', message: 'New feature available!', read: false, type: 'feature', date: '27.06.2024', },
    { id: '2', message: 'Your request is pending approval.', read: false, type: 'request', date: '27.06.2024', },
    { id: '3', message: 'Status changed to on hold.', read: false, type: 'status', date: '27.06.2024', },
  ];

  export default sampleNotifications