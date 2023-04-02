import { useState, useEffect, useRef } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { useAuth } from './context';
import { db } from '../scripts/firebase';

export default function Adminka() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch('/api/data')
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
      <span>
        {data.getD.map((data, key) => (
          <article
            className="flex  justify-center flex-col duration-300 border rounded-md shadow-lg hover:shadow-sm"
            key={key}
          >
            <div>
              <div className="flex flex-col justify-center pt-3 mb-6 mx-4">
                {/* <Image
                  src={post.photo}
                  width={400}
                  height={200}
                  alt="alt"
                  priority
                /> */}
                <h3 className="text-xl ">{data.name}</h3>
                <button
                  style={{ marginRight: '10px' }}
                  className="btn btn-danger"
                  onClick={() => console.log(data.entityId)}
                >
                  Delete
                </button>
                <p className="text-sm text-gray-400 ">{data.birthday}</p>
                <p className="text-sm text-gray-400 ">{data.rol}</p>
                <p className="text-sm text-gray-400 ">{data.photo}</p>
                <p className=" text-gray-400 ">{data.skils}</p>
              </div>
            </div>
          </article>
        ))}
      </span>
    </>
  );
}

Adminka.auth = true;
