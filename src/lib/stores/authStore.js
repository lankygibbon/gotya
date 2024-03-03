import { writable } from "svelte/store";
import {auth} from '$lib/firebase';
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateEmail, updatePassword , GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { goto } from '$app/navigation';


export const authStore = writable({
    isLoading:true,
    /**
     * @type import("firebase/auth").User|null
     */
    currentUser:null
})


export const authHandlers = {
    login: async (/** @type {string} */ email,/** @type {string} */ password) =>{
        await signInWithEmailAndPassword(auth,email,password);
        goto("/play");
    },
    signup: async (/** @type {string} */ email,/** @type {string} */ password)=> {
        await createUserWithEmailAndPassword(auth,email,password);
    },
    logout: async () => {
        await signOut(auth);
        goto("/");
    },
    resetPassword: async (/** @type {string} */ email) => {
        await sendPasswordResetEmail(auth,email);
    },
    updateEmail: async (/** @type {string} */ email) => {
        if(auth.currentUser != null){
            await updateEmail(auth.currentUser,email);
        }
    },
    updatePassword: async (/** @type {string} */ password) =>{
        if(auth.currentUser != null){
            await updatePassword(auth.currentUser,password);
        }
    },
    signInWithGoogle: async () => {
        let gProvider = new GoogleAuthProvider();
        await signInWithPopup(auth, gProvider);
        goto("/play");
    }

}
