import Model3d from '../components/Model';
import Header from '../sections/Header';

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="Home">
        <Model3d />
      </div>
    </>
  );
}
