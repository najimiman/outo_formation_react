import React from "react";
function List(props){
    return (<div>
        <img src={props.img}></img>
      <input type="checkbox" id={props.id}/>
      <label for={props.id}>{props.media}</label>
    </div>)
  }
  
export default List;  