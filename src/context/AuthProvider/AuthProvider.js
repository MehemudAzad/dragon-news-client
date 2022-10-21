import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {getAuth, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    // const user = {displayName: 'Batash Ali'}

    const providerLogin = (provider) =>{
        return signInWithPopup(auth, provider);
    }

    const logOut = () => {
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser =>{
            console.log('user inside state change', currentUser);
            setUser(currentUser);
        }));

        return ()=>{
            unsubscribe();
        } 
    },[])

    const authInfo = {user, providerLogin, logOut};

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;