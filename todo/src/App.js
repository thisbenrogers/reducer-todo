import React from 'react';

import TodoList from './components/TodoList';
import AddTodo from './components/AddTodoForm';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoList />
      <AddTodo />
    </div>
  );
}

export default App;
