import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth'


const app = initializeApp({
  // apiKey: process.env.REACT_APP_FIREBASE_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID

  apiKey: "AIzaSyCNnRWVcwKQow5O4HODuWvZ5nxCqWrN2dU",
  authDomain: "budget-control-8327f.firebaseapp.com",
  projectId: "budget-control-8327f",
  storageBucket: "budget-control-8327f.appspot.com",
  messagingSenderId: "195343164821",
  appId: "1:195343164821:web:2180a905d1df2a616b829c"
});

const auth = getAuth(app)

export default auth;