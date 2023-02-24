import Image from 'next/image';
import Link from 'next/link';
import alternative from '../public/alter.jpg';
import { useRouter } from 'next/router';

export default function Guyz({ props }) {
  const router = useRouter();
  return (
    <>
      <div className="">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {props.jamoamiz.map((data) => (
              <div key={data.id} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
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
                      <Link
                        href={{
                          pathname: '/about/' + data.id,
                          query: data,
                        }}
                      >
                        <span aria-hidden="true" className="absolute inset-0" />
                        {data.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm">{data.color}</p>
                  </div>
                  <p className="text-sm font-medium text-indigo-500">
                    {data.rol}
                  </p>
                </div>
                <p className="text-sm font-medium text-indigo-500">
                  {data.skils}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
