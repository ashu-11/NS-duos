


function SearchBar(props) {
  console.log("props",props);
  return (
    <div className="App">
      <input placeholder="Search here..." onChange={(e)=>props.searchItems(e.target.value)} value={props.searchValue}></input>
    </div>
  );
}

export default SearchBar;
