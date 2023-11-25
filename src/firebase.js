import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

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

export { auth, db, firebaseApp, getFirestore, collection };
