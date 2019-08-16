import React, { useReducer } from 'react';

import TodoList from './components/TodoList';

import { ListContext } from './contexts/ListContext';
import { listReducer } from './reducers/listReducer';
import { initialState } from './data';

import './App.css';

function App() {
  const [listState, dispatch] = useReducer(listReducer, initialState);

  return (
    <ListContext.Provider value={{ listState, dispatch }}>
      <div className="App">
        <h1>Todo App</h1>
        <TodoList />
      </div>
    </ListContext.Provider>
  );
}

export default App;
