function ListItems(props) {


  if (props.isLoading) {
    return <h1>Loading...</h1>;
  }
  
  return (
    <div>
      {props.listOfItems.map((photo) => {
        return (
          <div key={photo.id} style={{margin:10}}>
            <img src={photo.url}  height={100} width={100}/>
            <div>{photo.title}</div>
          </div>
        );
      })}
    </div>
  );
}
export default ListItems;
