import React, { useState, useEffect, useRef } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import { db } from '../scripts/firebase';

export default function useFetchData() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [todos, setTodos] = useState(null);

  const { currentUser } = useAuth();

  useEffect(() => {
    async function fetchData() {
      try {
        const docRef = doc(db, 'admin', currentUser.uid);
        const docSnap = await getDoc(docRef);
        console.log('docSnap', docSnap);
      } catch (err) {
        setError('Failed to load todos');
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [currentUser.uid]);

  return { loading, error, todos, setTodos };
}

// const docRef = doc(db, 'admin', currentUser.uid);
// console.log('docRef', docRef);
// const docSnap = await getDoc(docRef);
// console.log('docSnap', docSnap);
// if (docSnap.exists()) {
//   setTodos(docSnap.data());
//   console.log('docSnap', docSnap);
//   setTodos('todo' in docSnap.data() ? docSnap.data().todo : {});
// } else {
//   console.log('docSnap', docSnap);
//   setTodos({});
// }
