import React from 'react';
import useFirebase from '../../hooks/useFirebase';

export const UseAuthContext = React.createContext({});

const ProvideContext = ({ children }) => {
    const allcontext = useFirebase();
    return (
        <UseAuthContext.Provider value={allcontext}>
            {children}
        </UseAuthContext.Provider>
    );
};

export default ProvideContext;