import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDYmED5ViyicBvJZCBcpOOP3WAh8yrQHXE',
  authDomain: 'agri-bot-8e445.firebaseapp.com',
  projectId: 'agri-bot-8e445',
  storageBucket: 'agri-bot-8e445.appspot.com',
  messagingSenderId: '97529707269',
  appId: '1:97529707269:web:f7c3ec412e65c759f8d56c',
  measurementId: 'G-3RRLX3883K',
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
