import { useState } from 'react';

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState('');
  return (
    <>
      <input
        id="input"
        placeholder="Aufgabe hinzufügen..."
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button
        id="add"
        onClick={() => {
        setText('');
        onAddTask(text);
      }}>Add</button>
    </>
  )
}