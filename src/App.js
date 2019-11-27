import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


function App(props) {
  return (
    <div className="App">
      <div className="App-header">
        <h2>
          Simple todo
        </h2>
      </div>
      <div className="Todo-App">
        <TodoForm currentTodo={props.currentTodo} changeCurrent={props.changeCurrent}/>
        <TodoList todos={props.todos}/>
      </div>
    </div>
  );
}

export default App;
