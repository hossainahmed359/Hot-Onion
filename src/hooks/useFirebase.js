import initializeFirebaseAuth from "../components/Firebase/initializeFirebaseAuth";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, FacebookAuthProvider, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";

//initialize firebase 
initializeFirebaseAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    //auth
    const auth = getAuth();

    //Providers
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    //Handle Google Sign In
    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
            }).catch((error) => {
                setError(error.message);
            });
    }

    //Handle Facebook Sign In
    const facebookSignIn = () => {
        signInWithPopup(auth, facebookProvider)
            .then((result) => {
            })
            .catch((error) => {
                // Handle Errors here.
                setError(error.message)
            });
    }

    //Handle Sign Out 
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            }).catch((error) => {
                setError(error.message);
            });
    }

    //Reagister With Email || Email && Password Required
    const emailRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                setUser(result.user)
                setError('')
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    //Update User Name
    const updateUserName = userName => {
        updateProfile(auth.currentUser, {
            displayName: userName

        })
            .then(() => {
                //...
                // console.log(user)
            }).catch((error) => {
                setError(error.message)
            });

    }

    //Email Sign In || Email && Password Required
    const emailSignIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                setUser(result.user)
                // ...
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    //(User LogIn || LogOut) Observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                // User is signed out
            }
        });
    }, []);

    //Return
    return { googleSignIn, emailRegister, logOut, emailSignIn, updateUserName, setError, facebookSignIn, user, error }
}

export default useFirebase;