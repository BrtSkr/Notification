# Demo
* https://667cdcc09927dd53c3c7d180--glistening-cactus-efeb0f.netlify.app

# Notifications

* Notifications are stored in the browser's `localStorage` and have a lifespan of 24 hours. If 24 hours pass since the last update in `notificationsTimestamp`, the `notifications` and `notificationsTimestamp` are removed from `localStorage`. After that, it falls back to the `sampleNotificationData`.

* In the notification modal, you can switch between the read and unread states.

* An example of a single notification object: ``` { id: '1', message: 'New feature available!', read: false, type: 'feature', date: '27.06.2024', } ```
  

# Details
* Sample data for notifications is under /src/data/sampleNotificationData
* CSS is built with native nesting + Tailwind
* Button All notifications: shows as it says every single notification
* Button Unread: Shows only notifications that state of read: false
* Button Mark all as read: Changes state of all notifications to read: true
* Button next to notification: Can change both state to read: true and read:false (In real environment I would make so that it can change state only to read:true)
* Button Close: Closes modal
* Icons: react-icons
* Fonts: Poppins

# React + TypeScript + Tailwind + Vite