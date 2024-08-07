import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const db = firebase.initializeApp({
    apiKey: "AIzaSyDbFw0CsBsLT0HxRIJi0EV2EcsOpMfjEAM",
    authDomain: "realtime-5b099.firebaseapp.com",
})

export const firebaseAuth = db.auth()