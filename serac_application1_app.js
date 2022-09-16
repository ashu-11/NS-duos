import logo from './logo.svg';
import './App.css';
import ListItems from './components/ListItems'
import SearchBar from './components/SearchBar'
import {useState,useEffect} from 'react';
import  axios from 'axios'

function App() {

  const[photosList,setPhotosList]=useState([]);

  useEffect(()=>{

    axios.get('https://jsonplaceholder.typicode.com/photos').then((res)=>{
      console.log("data from APi ",res.data);
      setPhotosList(res.data)
    })

  },[])
  return (
    <div className="App">
      <SearchBar></SearchBar>
      <ListItems listOfItems={photosList}></ListItems>
    </div>
  );
}

export default App;
