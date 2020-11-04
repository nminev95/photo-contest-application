import { createContext } from 'react';

export const AuthContext = createContext({
    user: null,
    setLoginState: () => {}
});

export default AuthContext;
