import { createContext, useContext, useState, type ReactNode } from "react";

interface AuthContextType {
    isLoggedIn: boolean;
    username: string | null;
    login: (username: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState<string | null>(null);

    const login = (username: string) => {
        setIsLoggedIn(true);
        setUsername(username);
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUsername(null);
    };
    
    return <AuthContext.Provider value={{ isLoggedIn, username, login, logout }}>
        {children}
    </AuthContext.Provider>
};


export const useAuth = () => {
    const context = useContext(AuthContext);
    if(context === undefined) {
        throw new Error("useAuth must be used within a AuthProvider");
    }
    return context;
};

