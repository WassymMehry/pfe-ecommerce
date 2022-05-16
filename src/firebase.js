// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyBczEgCCOfbT9a4QtfjTXBziNWQnwbZPBw',
    authDomain: 'pfe-project-45edf.firebaseapp.com',
    projectId: 'pfe-project-45edf',
    storageBucket: 'pfe-project-45edf.appspot.com',
    messagingSenderId: '46971436372',
    appId: '1:46971436372:web:e472cb81be61e05ca89cc1',
    measurementId: 'G-190Y8CG8SX'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
