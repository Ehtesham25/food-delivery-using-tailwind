import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAacKXTSSHSLRojrrjZXrHr1pR5r6mY1DI",
    authDomain: "resturant-site-3d87c.firebaseapp.com",
    databaseURL: "https://resturant-site-3d87c-default-rtdb.firebaseio.com",
    projectId: "resturant-site-3d87c",
    storageBucket: "resturant-site-3d87c.appspot.com",
    messagingSenderId: "300772407411",
    appId: "1:300772407411:web:313642b2e60f6476f7d206",
    measurementId: "G-RGHFXL8BJD"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)

const fireStore= getFirestore(app)
const storage= getStorage(app);

export {app, fireStore, storage}