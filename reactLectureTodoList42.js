import React from 'react'

class TodoList extends React.Component {

    // constructor(){
    //   super();

    //   this.state ={
    //     task:""
    //   }
    // }  

    render() {

      return(
        <ul>
            {
              this.props.todoArray.map((value)=><li key={value.id}>{value.task}<button>Delete</button></li>
              )
            }
        </ul>
      )
    }



}
export default TodoList;
