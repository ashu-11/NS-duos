import logo from './logo.svg';
import './App.css';
import ListItems from './components/ListItems'
import SearchBar from './components/SearchBar'
import {useState,useEffect} from 'react';
import  axios from 'axios'

function App() {

  const[photosList,setPhotosList]=useState([]);
  const[searchItem,setSearchItem]=useState("");
  const[filterphotosList,setFilterPhotosList]=useState([]);
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(()=>{

    axios.get('https://jsonplaceholder.typicode.com/photos').then((res)=>{
      setIsLoading(false);
      setPhotosList(res.data)
      // setFilterPhotosList(res.data)
    })

  },[])

  useEffect(()=>{
      const filteredArray  = photosList.filter((photo)=>{
        return photo.title.includes(searchItem)
      })
      setFilterPhotosList(filteredArray);
  },[searchItem])

  const searchItems=(value)=>{
    // value whatever we have type in search box
      setSearchItem(value)
  }
  return (
    <div className="App">
      <SearchBar searchItems={searchItems} searchValue={searchItem}  ></SearchBar>
      <ListItems listOfItems={filterphotosList} isLoading={isLoading}></ListItems>
    </div>
  );
}

export default App;
