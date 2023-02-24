import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import alternative from '../../public/alter.jpg';

export default function EveryPerson() {
  const router = useRouter();
  const data = router.query;

  return (
    <>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <Link className=" text-sm flex justify-center" href="/about">
          Ortga
        </Link>
        <div className="mt-6 flex justify-center">
          <div key={data.id} className=" relative">
            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-80">
              <Image
                width={180}
                height={180}
                src={data.photo || alternative}
                alt="Alt"
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm">
                  <span aria-hidden="true" className="absolute inset-0" />
                  {data.name}
                </h3>
                <p className="mt-1 text-sm">{data.color}</p>
              </div>
              <p className="text-sm font-medium text-indigo-500">{data.rol}</p>
            </div>
            <p className="text-sm font-medium text-indigo-500">{data.skils}</p>
          </div>
        </div>
      </div>
    </>
  );
}
