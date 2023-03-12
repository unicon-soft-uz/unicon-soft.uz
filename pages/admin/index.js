import Adminka from '../../components/adminka';
import DataForm from '../../libs/DataForm';
import Header from '../../sections/Header';

export default function Admin() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center content-center text-center">
        Data
        <Adminka />
        Admin
      </div>
      <DataForm />
    </>
  );
}
