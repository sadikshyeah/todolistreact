import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const addTodo = () => {
    if (description && date) {
      setTodos([...todos, { description, date }]);
      setDescription('');
      setDate('');
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>


      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.description} {todo.date}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
