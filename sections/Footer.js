import Link from 'next/link';
import Friends from './Friends';
function Footer(args) {
  return (
    <footer className="px-4 sm:pt-6 py-6 mt-16">
      <Friends />
      <div className="flex flex-col text-center text-sm text-gray-500">
        <span className="dark:text-gray-100 text-gray-900 font-bold text-lg  py-2">
          UNICON-SOFT
        </span>

        <Link className="py-2 font-bold text-lg" href="#">
          us@exat.uz
        </Link>
        <span className="py-2">
          &copy; {new Date().getFullYear()} Barcha huquqlar himoyalangan
        </span>
      </div>
    </footer>
  );
}

export default Footer;
