import { Hamkorlar } from '../components/exports';
import Link from 'next/link';
import Image from 'next/image';

export default function Friends() {
  return (
    <>
      <div className=" py-6 sm:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:pt-8">
          <h2 className="text-center text-lg font-semibold leading-8">
            Bizning hamkorlarimiz
          </h2>
          <div className="mt-10 grid grid-cols-4 items-center gap-x-8 gap-y-10    xl:mx-0 lg:max-w-none xl:grid-cols-5">
            {Hamkorlar.map((items) => (
              <Link
                key={items.id}
                href={items.link}
                className="flex flex-col justify-center items-center text-base font-medium hover:text-gray-500"
              >
                <Image
                  title={items.name}
                  className="col-span-2 max-h-24 w-full object-contain lg:col-span-1 bg-white full-filled hover:opacity-75"
                  src={items.image}
                  alt={items.name}
                  width={158}
                  height={48}
                  priority
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
