import Image from 'next/image';
import { useState, useEffect } from 'react';
import alternative from '../public/alter.jpg';

const url = `https://raw.githubusercontent.com/unicon-soft-uz/data/main/articles/news_data.json`;
export default function Gallery() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        console.log(data);
      });
  }, []);
  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 [320px]:pr-4">
        <div className="mt-6 grid justify-center gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
          {data.articles.map((post, key) => (
            <article
              className="flex justify-center flex-col duration-300 border rounded-md shadow-lg hover:shadow-sm"
              key={key}
            >
              <div>
                <div className="flex flex-col justify-center pt-3 mb-6 mx-4">
                  <Image
                    src={post.photo}
                    width={400}
                    height={200}
                    alt="alt"
                    priority
                  />
                  <h3 className="text-xl ">{post.date}</h3>
                  <p className="text-sm text-gray-400 ">{post.name}</p>
                  <p className=" text-gray-400 ">{post.discription}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
