import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function SinglePage() {
  const [data, setData] = useState(null);
  const {id} = useParams();
  function getData() {
    fetch('http://localhost:3000/api/'+id)
    .then(r => r.json())
    .then(d => {
      setData(d);
    })
    .catch(e => console.error(e.message))
  }
  useEffect(getData);
  return (
    <>
      {data ? (
        <div>
          <p>{data.name}</p>
          <p>{data.ticker}</p>
          <p>{data.value}</p>
          <p>{data.change}</p>
        </div>
      ) : 'not found'}
    </>
  );
}
