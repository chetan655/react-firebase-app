import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {getFirestore, doc, getDoc , setDoc} from 'firebase/firestore'

const firebaseConfig = {

    apiKey: "AIzaSyA-kp8PZCsBsMjT3WvHudv8qQGe_nxdkU0",
  
    authDomain: "deakin-web-app-7df0e.firebaseapp.com",
  
    projectId: "deakin-web-app-7df0e",
  
    storageBucket: "deakin-web-app-7df0e.appspot.com",
  
    messagingSenderId: "1038476564765",
  
    appId: "1:1038476564765:web:bb293cf26f52be806a29f4"
  
  };
  
  
  // Initialize Firebase
  
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider(); 
  provider.setCustomParameters ({
   prompt:"select_account"
  });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocFromAuth= async (userAuth, additionalInformation ={}) =>{
 if (!userAuth) return;
 

 const userDocRef = doc (db, 'users', userAuth.uid );

 
 const userSnapshot = await getDoc(userDocRef);


 if (! userSnapshot.exists()){
   const {displayName , email} = userAuth;
   const createdAt = new Date();

 try {
   await setDoc(userDocRef, {
     displayName,
     email,
     createdAt,
     ...additionalInformation
   })
 }
 catch (error){
 console.log('error in creating ', error.message)
 }
}

 return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) =>{
 if (!email || !password) return;
return await createUserWithEmailAndPassword(auth, email, password)
}

export const signinAuthUserWithEmailAndPassword = async (email, password) =>{
 if (!email || !password) return;
return await signInWithEmailAndPassword(auth, email, password)
}