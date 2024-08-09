import React, { useState } from 'react';

const Put = () => {
  const [todoId, setTodoId] = useState<number | ''>('');
  const [title, setTitle] = useState<string>('');
  const [completed, setCompleted] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleUpdate = async () => {
    if (!todoId || !title) {
      setMessage('Please enter a valid Todo ID and Title.');
      return;
    }
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: 1, // Assuming a static userId or retrieve from context if needed
          id: todoId,
          title,
          completed,
        }),
      });

      if (response.ok) {
        setMessage('Todo updated successfully.');
        setTodoId('');
        setTitle('');
        setCompleted(false);
      } else {
        setMessage('Error updating Todo.');
      }
    } catch (error) {
      setMessage('Error updating Todo.');
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Update Todo</h2>
      <input
        type="number"
        value={todoId}
        onChange={(e) => setTodoId(Number(e.target.value))}
        placeholder="Enter Todo ID"
      />
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter new Title"
      />
      <label>
        Completed
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
      </label>
      <button onClick={handleUpdate}>Update Todo</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Put;
