const getAllUserNotifications = notificationsData => {
    return async (socket) => {
        const notifications = await notificationsData.getNotificationsById(socket.userId);

        if (notifications.juryInvitations.length !== 0 || notifications.privateContestInvitations.length !== 0) {
            socket.emit('notifications', notifications);
        }

        return { error: null, notifications: notifications };
    };
};

export default {
    getAllUserNotifications,
};