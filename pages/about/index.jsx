import Guyz from '../../components/Guyz';
import { useState, useEffect } from 'react';
const url = `https://raw.githubusercontent.com/unicon-soft-uz/data/main/data.json`;

export default function About() {
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
      <Guyz props={data} />
    </>
  );
}
