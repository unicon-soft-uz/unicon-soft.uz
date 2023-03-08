import { useState, useEffect } from 'react';
export default function Gallery() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(process.env.DATA_URL)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  console.log(data.jamoamiz);

  return (
    <>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 [320px]:pr-4">
        <div className="mt-6 grid  gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
          {data.jamoamiz.map((post, key) => (
            <article
              className=" duration-300 border rounded-md shadow-lg hover:shadow-sm"
              key={key}
            >
              <div>
                <div className="pt-3 mb-6 ml-4 mr-2">
                  <h3 className="text-xl ">{post.id}</h3>
                  <p className="text-sm text-gray-400 ">{post.name}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
