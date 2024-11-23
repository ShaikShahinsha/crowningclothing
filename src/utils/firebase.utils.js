import { initializeApp } from 'firebase/app';
import {getAuth,
        signInWithRedirect,
        signInWithPopup,
        GoogleAuthProvider,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,
        onAuthStateChanged
} from 'firebase/auth';
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import { getFirestore , doc, getDoc, setDoc} from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFLY5FCHuQwHacFdh_L0h68IEXLbs3484",
  authDomain: "cwn-clth-db.firebaseapp.com",
  projectId: "cwn-clth-db",
  storageBucket: "cwn-clth-db.firebasestorage.app",
  messagingSenderId: "849944153291",
  appId: "1:849944153291:web:fdc5b7c492f0e420a89f4e"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInGooglePopup = ()=> signInWithPopup(auth,provider);

export const db = getFirestore();   

export const createUserDocumentFromAuth = async(userAuth,additionalInfo={}) =>{
    const userDocRef = doc(db, 'users',userAuth.uid);
    console.log(userDocRef);

    const userSnapShot = await getDoc(userDocRef);

    console.log(userSnapShot);
    console.log(userSnapShot.exists());

    if(!userSnapShot.exists()){
        const{displayName,email} = userAuth;
        const createdAt = new Date();
        try{
            await setDoc(userDocRef,{
                displayName, 
                email,
                createdAt,
                ...additionalInfo
             });
        }catch(error){
            console.log("error creating the user",error.message);
        }
       
    }
    return userDocRef;

}

export const createAuthUserWithEmailAndPassword = async(email,password) =>{

    if(!email || !password) return;

    return createUserWithEmailAndPassword(auth,email,password);
}

export const signInWithGmailEmailAndPassword = async(email,password) =>{

    if(!email || !password) return;

    return signInWithEmailAndPassword(auth,email,password);
}


export const SignOutUser = async () => await signOut(auth);

export const onAuthStateChangeLsitener = (callback) => onAuthStateChanged(auth, callback)

   