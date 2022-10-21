
import { useState, useRef, useEffect } from 'react';
import TaskList from './TaskList';


export default function AddTask({ onAddTask }) {

  const getLocalItems = () => {
    let list = localStorage.getItem('lists');
    console.log(list);

    if(list) {
      return JSON.parse(localStorage.getItem('lists'));
    } else {
      return [];
    }
  }

  const [inputData, setInputData] = useState('');
  const [items, setItems] = useState(getLocalItems());

  const addItem = () => {
    if(!inputData){

    } else {
      setItems ([...items, inputData]);
      setInputData('')
    }
  }

  //Remove all ? 
  const removeAll = () => {
    setItems([]);
  }

useEffect(() => {

  localStorage.setItem('lists', JSON.stringify(items))

}, [items]);

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


