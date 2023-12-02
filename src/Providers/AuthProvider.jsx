import { createContext, useState } from "react";
import { getAuth } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProviders = ({children}) => {
    const [ user, serUser ] = useState(null);
    const [ loading, setLoading ] = useState(true)

    const authInfo = {
        user,
        loading,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;