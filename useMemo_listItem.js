import React from "react";

function ListItem(props) {
  console.log("Rendered List Item");
  return <li>{props.item.name}</li>;
}

export default React.memo(ListItem);
