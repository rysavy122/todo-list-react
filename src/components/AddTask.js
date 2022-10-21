
import { useState, useRef } from 'react';


export default function AddTask({ onAddTask }) {

  const data=useRef();

  const handleClick=()=>{
    console.log(data.current.value,"initial value")
    localStorage.setItem("inputValue",text)
  }
  

  console.log(localStorage.getItem("inputValue"),"****")



  const [text, setText] = useState('');
  return (
    <>
      <input
      ref={data}
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
        handleClick();
      }}>Add</button>
    </>
  )
}


