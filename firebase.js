import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Configuration Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDLL4IPH_eTpjJUq8_D_plah4mwUhXudYs",
    authDomain: "stacknavigation-1d4ef.firebaseapp.com",
    projectId: "stacknavigation-1d4ef",
    storageBucket: "stacknavigation-1d4ef.appspot.com",
    messagingSenderId: "360893092426",
    appId: "1:360893092426:web:1bfaac0da55f20d5960cb3"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
