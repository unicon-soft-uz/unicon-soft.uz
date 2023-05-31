// import AdminPanel from '../components/adminPanel';
// import DataForm from '../libs/DataForm';
// import Header from '../sections/Header';

// export default function Admin() {
//   return (
//     <>
//       {/* <Header />
//       <div className="flex flex-col justify-center content-center text-center">
//         Data
//         <AdminPanel />
//         Admin
//       </div>
//       <DataForm /> */}
//     </>
//   );
// }

import Login from '../components/Login';
import AdminPanel from '../components/adminPanel';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';
import { getAuth } from 'firebase/auth';

export default function Admin() {
  const auth = getAuth();
  const user = auth.currentUser;
  let router = useRouter();
  const { currentUser } = useAuth();
  // if (!currentUser) {
  //   router.push('./signup');
  // }
  // console.log(user);
  return (
    <>
      {!currentUser && <Login />}
      {currentUser && <AdminPanel />}
    </>
  );
}
