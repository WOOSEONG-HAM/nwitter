import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
    appId: process.env.REACT_APP_APP_ID,
};

// const firebaseConfig = {
//     apiKey: "AIzaSyDLUGUSNpJnvTYZdinuGHIUxc8UjO1woao",
//     authDomain: "nwitter-73d85.firebaseapp.com",
//     projectId: "nwitter-73d85",
//     storageBucket: "nwitter-73d85.appspot.com",
//     messagingSenderId: "830748481380",
//     appId: "1:830748481380:web:d211c1ab1543473bb94c71",
// };

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();