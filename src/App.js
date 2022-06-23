import React, { useState } from 'react'
import axios from 'axios'
import Gallary from './Gallary';

const App = () => {

  const[search,setSearch] = useState("");

  const [data,setData] = useState([])

  const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";

  const onChangeHandler = o=>{
   
     setSearch(o.target.value);

  }

  const submitHandler = s=>{

    s.preventDefault();
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`).then(
      r =>setData(r.data.photos.photo)
    );
  }

  return (
    <div>
     <center>
      <h1>Gallery Snapshot</h1>
      <form onSubmit={submitHandler}>
        <input size= '30'type="text" value={search} onChange={onChangeHandler}/><br /><br />
        <input type="submit" name="Search" />
      </form>
      <br />
       {data.length>=1?<Gallary data ={data}/>:<h4>No Data Loaded</h4>}
      </center> 
    </div>
  )
}

export default App
