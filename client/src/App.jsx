import React from "react";
import TodoList from './Todo/TodoList'

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <p>Todo List</p>
      {/* <Counter />
      <CounterDisplay /> */}
      <TodoList />
    </header>
  </div>
  );
}

export default App;
