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
import Header from '../sections/Header';
import LogOut from '../components/logOut';

export default function Admin() {
  const { currentUser } = useAuth();

  return (
    <>
      <Header />
      {!currentUser && <Login />}
      {currentUser && (
        <div className="">
          <AdminPanel />
          <LogOut />
        </div>
      )}
    </>
  );
}
