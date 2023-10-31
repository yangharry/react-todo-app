import React, { useState } from 'react';

import './App.css';
import Lists from './components/Lists';
import Form from './components/Form';

function App() {
  const [todoData, setTodoData] = useState([
    { id: '1', title: '공부하기', completed: false },
    { id: '2', title: '청소하기', completed: false },
  ]);
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    setTodoData([...todoData, newTodo]);
    setValue('');
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full m-4  p-6 bg-white rounded shadow md:w-3/4 md:max-w-lg lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>할 일 목록</h1>
        </div>
        <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />
        <Lists todoData={todoData} setTodoData={setTodoData} />
      </div>
    </div>
  );
}
export default App;
