import React, { useReducer } from 'react';

import { TodoContext } from './contexts/TodoContext';

import { initialState, reducer } from './reducers/startReducer';

import TodoList from './components/TodoList';

import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <h1>Todo App</h1>
        <TodoList />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
