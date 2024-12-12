import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyDjDee-xgQO6RAgIQUpDk7ysuVpC11s5Ss",
  authDomain: "curso-d891b.firebaseapp.com",
  projectId: "curso-d891b",
  storageBucket: "curso-d891b.firebasestorage.app",
  messagingSenderId: "34251388066",
  appId: "1:34251388066:web:bec1f113551ce8e1d213fb",
  measurementId: "G-0L2DSTVH3L"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };