import React, { useState } from 'react'

const DELETE = () => {
  const [todoId, setTodoId] = useState<number | ''>('');
  const [message, setMessage] = useState<string | null>(null);

  const handleDelete = async () => {
    if (!todoId) {
      setMessage('Please enter a valid Todo ID.');
      return;
    }
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setMessage('Todo deleted successfully.');
        setTodoId('');
      } else {
        setMessage('Error deleting Todo.');
      }
    } catch (error) {
      setMessage('Error deleting Todo.');
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Delete Todo</h2>
      <input
        type="number"
        value={todoId}
        onChange={(e) => setTodoId(Number(e.target.value))}
        placeholder="Enter Todo ID"
      />
      <button onClick={handleDelete}>Delete Todo</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default DELETE