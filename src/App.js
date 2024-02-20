import './App.css';
import { useState } from 'react';
import Axios from 'axios'

function App() {
  const [data, setData] = useState('')
  const [image, setCatImage] = useState('')
  const handleFetch = () => {
    // fetch('https://catfact.ninja/fact')
    //   .then((res) => res.json())
    //   .then(data => setData(data.fact))
    //   .catch((err) => console.log(err))
    Axios.get('https://catfact.ninja/fact').then((res) => {
      setData(res.data.fact)
    })

    Axios.get('https://api.thecatapi.com/v1/images/search').then((res) => {
      setCatImage(res.data[0].url)
    })
  }




  return (
    <div className="App">
      <button onClick={handleFetch}>Generate Cat fact</button>

      <div >
        <div>
          {data && <h1>{data}</h1>}

          {image && <img src={image} alt='cats' />}
        </div>

      </div>


    </div>
  );
}

export default App;
