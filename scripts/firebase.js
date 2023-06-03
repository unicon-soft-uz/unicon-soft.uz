import { initializeApp, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getDatabase } from 'firebase/database';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

function initializeAppIfNecessary() {
  try {
    return getApp();
  } catch (any) {
    const firebaseConfig = {
      apiKey: 'AIzaSyCKd_09QLeeXKBDa02_NDKLgtWduigORZw',
      authDomain: 'unicon-soft.firebaseapp.com',
      databaseURL:
        'https://unicon-soft-default-rtdb.asia-southeast1.firebasedatabase.app',
      projectId: 'unicon-soft',
      storageBucket: 'unicon-soft.appspot.com',
      messagingSenderId: '784988309439',
      appId: '1:784988309439:web:7b8f604c598666cb76c30a',
    };
    return initializeApp(firebaseConfig);
  }
}

// Initialize Firebase
const app = initializeAppIfNecessary();
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const database = getDatabase(app);
export { auth, db, storage, database };
