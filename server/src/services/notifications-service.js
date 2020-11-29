const getAllUserNotifications = notificationsData => {
    return async (socket) => {
        const notifications = await notificationsData.getNotificationsById(socket.userId);
        if (notifications.juryInvitations.length !== 0 || notifications.privateContestInvitations.length !== 0) {
            console.log('fetching new');

            const unreadContestNotifications = notifications.privateContestInvitations.filter((notification) => !!notification.isRead === false);
            console.log(unreadContestNotifications);

            const unreadJuryNotifications = notifications.juryInvitations.filter((notification) => !!notification.isRead === false);
            console.log(unreadJuryNotifications);

            socket.emit('notifications', {
                privateContestInvitations: unreadContestNotifications,
                juryInvitations: unreadJuryNotifications,
            });
        }

        return { error: null, notifications: notifications };
    };
};

const markNotificationRead = notificationsData => {
    return async (socket, contestId) => {
        await notificationsData.changeNotificationToRead(socket.userId, contestId);
        console.log('changing');
    };
};

export default {
    getAllUserNotifications,
    markNotificationRead,
};