import { createContext, useContext, useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(undefined);

    useEffect(() => {
        setIsAuthenticated(false);
    }, [])

    const login = async (email, password) => {
        try {
            
        } catch (e) {

        }
    }

    const logout = async () => {
        try {
            
        } catch (e) {

        }
    }
    
    const register = async (email, password, username, profileUrl) => {
        try {
            
        } catch (e) {

        }
    }

    return (
        <AuthContext.Provider value={{user, isAuthenticated, login, register, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () =>{
    const value = useContext(AuthContext);

    if (!value){
        throw new Error('Use Auth must be wrapped in Auth provider');
    }
    return value;
}