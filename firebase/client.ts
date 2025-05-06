import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBn64fR_R3gnQxKyARZz4_luRw4eLX6jAs",
    authDomain: "prepwise-5d4a9.firebaseapp.com",
    projectId: "prepwise-5d4a9",
    storageBucket: "prepwise-5d4a9.firebasestorage.app",
    messagingSenderId: "483614737654",
    appId: "1:483614737654:web:da7470b800cb96780418d7",
    measurementId: "G-5BY4TGPHW1"
};

const app = !getApps.length ?  initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)