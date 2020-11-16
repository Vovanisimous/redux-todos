import React from 'react';
import TodosContainer from "./components/TodosContainer";
import InputsContainer from "./components/InputsContainer";

function App() {
  return (
    <div>
        <h1 className={"title"}>Todos</h1>
      <TodosContainer />
      <InputsContainer />
    </div>
  );
}

export default App;
