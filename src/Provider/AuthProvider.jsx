/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";




export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleSignIn = (value) =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email,password);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth)
    }


    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('user', currentUser);
            setUser(currentUser);
            setLoading(false);

            // if user exists then issue a token
            if(currentUser){
                const loggedUser = {email: currentUser.email};
                axios.post('https://online-group-study-server.vercel.app/jwt', loggedUser, {withCredential: true})
                .then(res =>{
                    console.log('token response', res.data);
                })
            }
        });
        return () =>{
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        googleSignIn,
        createUser,
        signIn,
        logOut
      }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;