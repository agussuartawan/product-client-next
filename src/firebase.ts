import { initializeApp } from "firebase/app";
import { getMessaging } from "@firebase/messaging"

const firebaseConfig = {
    apiKey: "AIzaSyBIcxDGaj9oeZQPxiEobsmTl5zTGC4odAk",
    authDomain: "product-cart-ba34a.firebaseapp.com",
    projectId: "product-cart-ba34a",
    storageBucket: "product-cart-ba34a.appspot.com",
    messagingSenderId: "55722102633",
    appId: "1:55722102633:web:33312febbb769cacabb7f8",
    measurementId: "G-DJ9W098QS1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export function requestPermission() {
    Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {

        }
    })
}

