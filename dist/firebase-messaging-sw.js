import { initializeApp } from 'firebase/app';
import { getMessaging ,getToken } from 'firebase/app-check';


const firebaseConfig = {
  apiKey: "AIzaSyD3Jazv1elC0YkX_h1HkX9yAniNJ06Anpw",
  authDomain: "snapevent-push.firebaseapp.com",
  projectId: "snapevent-push",
  storageBucket: "snapevent-push.appspot.com",
  messagingSenderId: "23109363608",
  appId: "1:23109363608:web:1ad21380f4b4534bd3eded",
  measurementId: "G-MT72YCDGBP"
};

const firebase = initializeApp(firebaseConfig);
const token = getToken(firebase);

export default token;