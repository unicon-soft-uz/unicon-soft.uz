import React from 'react';
import { getAuth, signOut } from 'firebase/auth';

export default function LogOut() {
  const auth = getAuth();
  const hendleClick = () => {
    signOut(auth);
  };

  return (
    <div className="flex flex-col mx-auto">
      <button
        className="bg-transparent mx-auto max-w-3 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={hendleClick}
      >
        Logout
      </button>
    </div>
  );
}
