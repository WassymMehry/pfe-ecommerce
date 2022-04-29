// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
export const auth = getAuth(app);
export default app;
