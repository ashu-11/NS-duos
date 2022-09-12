import React from 'react'

class Todo extends React.Component {

    constructor(){
      super();

      this.state ={
        task:""
      }
    }  

    render() {

      const addTask =(event)=>{
        this.setState({
          task:event.target.value
        })
      }

      const submitToArray=(event)=>{
          event.preventDefault();
          this.props.addTodo(this.state.task)
      }

      return(
        <form  onSubmit={submitToArray}>
          <input placeholder='please enter the task' value={this.state.task} onChange={addTask}></input>
          <button>Add task</button>
        </form>
      )
    }



}
export default Todo;
