import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = () => (
  <div className="container">
    <AddTodo />
    <hr />
    <VisibleTodoList />
  </div>
);

export default App;
