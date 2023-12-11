import React, { createContext, useContext, ReactNode, useState } from 'react';

interface UserData {
    name: string;
    accountBalance: number;
}

interface UserContextType {
    user: UserData;
    setUser: React.Dispatch<React.SetStateAction<UserData>>;
}

interface UserContextProviderProps {
    children: ReactNode;
}

const defaultUser: UserData = {
    name: 'Guest',
    accountBalance: 1000,
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = (): UserContextType => {
    const context = useContext(UserContext);
    if(context === undefined) {
        throw new Error('useUserContext must be used within a UserContextProvider');
    }
    return context;
}

export const UserContextProvider: React.FC<UserContextProviderProps> = ({ children }) => {
    const [user, setUser] = useState<UserData>(defaultUser);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

