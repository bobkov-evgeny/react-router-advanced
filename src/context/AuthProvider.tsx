import React, {createContext, useContext, useState} from "react";

interface IAuthContextValue {
    user: string | null,
    signIn: (newUser: string, callback: () => void) => void,
    signOut: (callback: () => void) => void
}

const AuthContext = createContext<IAuthContextValue | null>(null);

export function useAuth(){
    return useContext(AuthContext);
}

export const AuthProvider: React.FC<any> = ({children}) => {

    const [user, setUser] = useState(() => localStorage.getItem('user') || null);

    const signIn = (newUser: string, callback: () => void) => {
        setUser(newUser);
        localStorage.setItem('user', newUser)
        callback();
    };

    const signOut = (callback: () => void) => {
        setUser(null);
        localStorage.removeItem('user')
        callback();
    };

    const value = {
        user,
        signIn,
        signOut
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};