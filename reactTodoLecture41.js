
import './App.css';
import React from 'react';
import Todo from './components/Todo'
import TodoList from './components/TodoList';
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {

  constructor() {

    super();
    this.state={
      todos:[]
    }
  }

render() {

  const addTodo=(task)=>{

    const newtask ={
        id:uuidv4(),
        task:task,
        isCompleted:false
    }
    // please avoid updating the existing array always create a new array
    const Updatedtask=[...this.state.todos,newtask]
    this.setState({
      todos:Updatedtask
    })
  }


  return(
    <>
      <Todo  addTodo={addTodo}/>
      <TodoList todoArray={this.state.todos} />
    </>
  )
}

}
export default App;
