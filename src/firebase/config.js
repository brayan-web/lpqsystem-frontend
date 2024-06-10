import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCDPC6HWyRrvog8XyWv8JBDYnHtKtImLEg",
    authDomain: "lpq-system-5f3e3.firebaseapp.com",
    projectId: "lpq-system-5f3e3",
    storageBucket: "lpq-system-5f3e3.appspot.com",
    messagingSenderId: "29573896774",
    appId: "1:29573896774:web:3b0fb2496695d70cb50847"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
