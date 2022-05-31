// Import the functions you need from the SDKs you need
import * as firebase  from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZzyTJkjO5lCzIRwXV4KbgnLKtDVk8UUU",
  authDomain: "food-delivery-app-96630.firebaseapp.com",
  projectId: "food-delivery-app-96630",
  storageBucket: "food-delivery-app-96630.appspot.com",
  messagingSenderId: "820637380102",
  appId: "1:820637380102:web:63b38738d6435db9679d87"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export {auth};