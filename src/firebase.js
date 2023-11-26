import { getAuth, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { getFirestore, collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { serverTimestamp } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCiNm9RsteOqi-4dysNrq3sjS_FNk5Vh6M',
  authDomain: 'slack-clone-4570c.firebaseapp.com',
  projectId: 'slack-clone-4570c',
  storageBucket: 'slack-clone-4570c.appspot.com',
  messagingSenderId: '1059035726649',
  appId: '1:1059035726649:web:3767ff4b363290af941ee8',
  measurementId: 'G-NP30TYZX4T',
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export async function createRoom(name) {
  const roomCollection = collection(db, 'rooms');

  try {
    const docRef = await addDoc(roomCollection, { name });
    console.log('Document written with ID: ', docRef.id);
  } catch (error) {
    console.error('Error adding document: ', error);
  }
}

export async function createMessage(roomId, message, user) {
  const messageCollection = collection(db, 'rooms', roomId, 'messages');
  const timestamp = serverTimestamp();

  try {
    const docRef = await addDoc(messageCollection, {
      message,
      timestamp,
      avatarImage: user.photoURL,
      displayName: user.displayName,
    });

    console.log('Document written with ID: ', docRef.id);
  } catch (error) {
    console.error('Error adding document: ', error);
  }
}

export { signInWithPopup, auth, db, firebaseApp, getFirestore, collection, googleProvider };
