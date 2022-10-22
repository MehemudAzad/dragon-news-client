import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); 
    // const user = {displayName: 'Batash Ali'}

    const providerLogin = (provider) =>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile =  (profile) =>{
        return updateProfile(auth.currentUser, profile)
    }
    const verifyEmail = () =>{
        return sendEmailVerification(auth.currentUser);
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser =>{
            console.log('user inside state change', currentUser);
            if(null || currentUser.emailVerified){
                setUser(currentUser);
            }
            setLoading(false);
        
        }));
 
        return ()=>{
            unsubscribe();
        } 
    },[])

    const authInfo = {user, providerLogin, logOut, createUser, signIn, updateUserProfile, verifyEmail};

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;