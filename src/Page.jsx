import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Page() {
  const [data, setData] = useState(null);
  function getData() {
    fetch('http://localhost:3000/api/')
    .then(r => r.json())
    .then(d => {
      setData(d);
    })
    .catch(e => console.error(e.message))
  }
  useEffect(getData);
  return (
    <>
      {data?.map((item, idx) => (
        <p key={idx}>
          <Link to={"/page/"+idx}>{item.name}</Link>
        </p>
      ))}
    </>
  );
}
