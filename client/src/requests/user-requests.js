const userEndpoints = {
    registerUser: '/auth/register',
    loginUser: '/auth/login',
    createNewToken: '/auth/token',
    userCurrentContests: '/users/contests',
    userPastContests: '/users/past-contests',
    userProfile: '/users/:id/profile',
    getHighLevelUsers: '/users/experts',
}

export default userEndpoints;