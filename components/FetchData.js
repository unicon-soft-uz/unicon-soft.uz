import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const url = `https://raw.githubusercontent.com/unicon-soft-uz/data/main/data.json`;

export default function Guyz() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <>
      <>
        <div className=" py-24 sm:py-32">
          <div className=" grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-1">
            <ul
              role="list"
              className="grid gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-2"
            >
              {data.jamoamiz.map((person) => (
                <li key={person.id}>
                  <div className="flex items-center gap-x-6">
                    <Image
                      width={50}
                      height={50}
                      className="h-16 w-16 rounded-full"
                      src={person.photo}
                      alt="alt"
                    />
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight">
                        {person.name}
                      </h3>
                      <p className="text-sm font-semibold leading-6 text-indigo-600">
                        {person.rol}
                      </p>
                      <p className="text-sm font-semibold leading-6">
                        {person.birthday}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    </>
  );
}
