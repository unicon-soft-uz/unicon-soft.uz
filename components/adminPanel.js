import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  doc,
  setDoc,
  deleteField,
  onSnapshot,
  collection,
  getDocs,
} from 'firebase/firestore';
import { db, database } from '../scripts/firebase';
import useFetchData from '../hooks/fetchHook';
import TodoCard from './editProfile';
import { getStorage, getDownloadURL } from 'firebase/storage';
import Image from 'next/image';
import { ref, get } from 'firebase/database';

export default function AdminPanel() {
  const { userInfo, currentUser } = useAuth();
  const [edit, setEdit] = useState(null);
  const [todo, setTodo] = useState('');
  const [edittedValue, setEdittedValue] = useState('');
  const [foto, setFoto] = useState('');
  const { todos, setTodos, loading, error } = useFetchData();

  // useEffect(() => {
  //   getDownloadURL(forestRef)
  //     .then((f) => {
  //       const photoURL = f;
  //       // Metadata now contains the metadata for 'images/forest.jpg'
  //       setFoto(photoURL + '.jpg');
  //       console.log('fotoURL:', photoURL + '.jpg');
  //     })
  //     .catch((error) => {
  //       console.log('getMetadata:', error);
  //     });
  // }, []);
  ////////////////////
  async function readData() {
    const querySnapshot = await getDocs(collection(db, 'admin'));
    // const data = await querySnapshot.docs;
    console.log(querySnapshot);
    // querySnapshot.forEach((doc) => {
    //   console.log(`${doc.id} => ${doc.data()}`);
    // });
  }
  readData();
  // const dataa = doc(db, 'admin', 'region');
  // console.log(dataa);

  ///////////////////
  async function handleAddTodo() {
    if (!todo) {
      return;
    }
    const newKey =
      Object.keys(todos).length === 0 ? 1 : Math.max(...Object.keys(todos)) + 1;
    console.log(Object.keys(todos));
    setTodos({ ...todos, [newKey]: todo });
    const userRef = doc(db, 'admin', currentUser.uid);
    await setDoc(
      userRef,
      {
        todo: {
          [newKey]: todo,
        },
      },
      { merge: true }
    );
    setTodo('');
    console.log(userRef);
  }

  async function handleEditTodo() {
    if (!edittedValue) {
      return;
    }
    const newKey = edit;
    setTodos({ ...todos, [newKey]: edittedValue });
    const userRef = doc(db, 'admin', currentUser.uid);
    await setDoc(
      userRef,
      {
        todo: {
          [newKey]: edittedValue,
        },
      },
      { merge: true }
    );
    setEdit(null);
    setEdittedValue('');
  }

  function handleAddEdit(todoKey) {
    return () => {
      console.log(todos[todoKey]);
      console.log('bannan');
      setEdit(todoKey);
      setEdittedValue(todos[todoKey]);
    };
  }

  function handleDelete(todoKey) {
    return async () => {
      const tempObj = { ...todos };
      delete tempObj[todoKey];

      setTodos(tempObj);
      const userRef = doc(db, 'admin', currentUser.uid);
      await setDoc(
        userRef,
        {
          todo: {
            [todoKey]: deleteField(),
          },
        },
        { merge: true }
      );
    };
  }

  return (
    <div className="w-full max-w-[65ch] text-xs sm:text-sm mx-auto flex flex-col flex-1 gap-3 sm:gap-5 py-8">
      <div className="flex items-stretch">
        <input
          type="text"
          placeholder="Enter todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="outline-none p-3 text-base sm:text-lg text-slate-900 flex-1"
        />
        <button
          onClick={handleAddTodo}
          className="w-fit px-4 sm:px-6 py-2 sm:py-3 bg-amber-400 text-white font-medium text-base duration-300 hover:opacity-40"
        >
          ADD
        </button>
      </div>
      {loading && (
        <div className="flex-1 grid place-items-center">
          <i className="fa-solid fa-spinner animate-spin text-6xl"></i>
        </div>
      )}
      {!loading && (
        <>
          {/* <img src={foto} height={200} width={200} alt="fotor" /> */}
          <>
            {/* {Object.keys(todos).map((todo, i) => {
      return (
        <TodoCard
          handleEditTodo={handleEditTodo}
          key={i}
          handleAddEdit={handleAddEdit}
          edit={edit}
          todoKey={todo}
          edittedValue={edittedValue}
          setEdittedValue={setEdittedValue}
          handleDelete={handleDelete}
        >
          {todos[todo]}
        </TodoCard>
      );
    })} */}
          </>
        </>
      )}
      {/* {!addTodo && <button onClick={() => setAddTodo(true)} className='text-cyan-300 border border-solid border-cyan-300 py-2 text-center uppercase text-lg duration-300 hover:opacity-30'>ADD TODO</button>} */}
    </div>
  );
}
