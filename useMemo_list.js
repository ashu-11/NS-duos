import React from "react";
import ListItem from "./ListItem";

function List(props) {
  console.log("Rendered:List");
  return (
    <ul>
      {props.list.map((item) => {
        return <ListItem item={item} />;
      })}
    </ul>
  );
}

export default React.memo(List);

//React memo checks the previous props
//and the new props
//If both the props are same and have not changed
//Then Dioffing algorithm will be overridden
//and component to will not re render
