import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";



export const authContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const LogOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateProfileUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            return unsubscribe();
        }
    }, []);


    const authInfo = {
        user,
        setUser,
        createUser,
        singInUser,
        LogOutUser,
        googleLogin,
        updateProfileUser,
        loading,
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;