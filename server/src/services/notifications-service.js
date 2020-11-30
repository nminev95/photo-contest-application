const getAllUserNotifications = notificationsData => {
    return async (socket) => {
        const notifications = await notificationsData.getNotificationsById(socket.userId);
        if (notifications.juryInvitations.length !== 0 || notifications.privateContestInvitations.length !== 0) {
            const unreadContestNotifications = notifications.privateContestInvitations.filter((notification) => !!notification.isRead === false);
            const unreadJuryNotifications = notifications.juryInvitations.filter((notification) => !!notification.isRead === false);

            socket.emit('notifications', {
                privateContestInvitations: unreadContestNotifications,
                juryInvitations: unreadJuryNotifications,
            });
        }
    };
};

const markNotificationRead = notificationsData => {
    return async (socket, contestId, ) => {
        await notificationsData.changeNotificationToRead(socket.userId, contestId);

        const notifications = await notificationsData.getNotificationsById(socket.userId);
        if (notifications.juryInvitations.length !== 0 || notifications.privateContestInvitations.length !== 0) {
            const unreadContestNotifications = notifications.privateContestInvitations.filter((notification) => !!notification.isRead === false);
            const unreadJuryNotifications = notifications.juryInvitations.filter((notification) => !!notification.isRead === false);
        
            console.log({
                privateContestInvitations: unreadContestNotifications,
                juryInvitations: unreadJuryNotifications,
            });
            
            return {
                privateContestInvitations: unreadContestNotifications,
                juryInvitations: unreadJuryNotifications,
            };
        }
    };
};

export default {
    getAllUserNotifications,
    markNotificationRead,
};