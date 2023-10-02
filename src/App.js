import './App.css';
import { useCallback, useState } from 'react';
import InfiniteScroll from './InfiniteScroll';

function App() {

  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');

  const getData = useCallback( async (query, page) => {
    const promise = await fetch('https://openlibrary.org/search.json?' + new URLSearchParams({
      q: query,
      page: page
    }))

    const data = await promise.json();

    setData((prevData) => [...prevData, ...data.docs] )
    console.log(data.docs);

  }, []);

  const handleChange = useCallback((e) => {
    setQuery(e.target.value);
  },[]);

  const renderListItem = ({title}, key, ref) => {
    return <div className='item' ref={ref} key={key}>{title}</div>
  }
  
  return (
    <>
      <input className='input' value={query} onChange={handleChange}></input>
      <InfiniteScroll 
        renderListItem={renderListItem} 
        listData={data} 
        getData={getData} 
        query={query} 
      />
    </>
  );
}

export default App;
