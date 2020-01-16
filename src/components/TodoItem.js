import React from 'react';
import { useStoreActions } from "easy-peasy";

const TodoItem = ({ todo }) => {
  const { remove, toggle } = useStoreActions(actions => ({
    remove: actions.remove,
    toggle: actions.toggle
  }));

  const divStyle = {
    background: '#f4f4f4',
    padding: '10px',
    borderBottom: '1px #ccc dotted',
    textDecoration: todo.completed ? 'line-through' : 'none'
  }

  const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRaduis: '50%',
    cursor: 'pointer',
    float: 'right'
  }

  function GetCheckbox() {
    const isCompleted = todo.completed;
    if (isCompleted) {
      return <input type="checkbox" onChange={() => toggle(todo.id)} checked/>;
    }
    return <input type="checkbox" onChange={() => toggle(todo.id)}/>;
  }

  return (
    <div  style={divStyle}>
      <p>
      <GetCheckbox isCompleted />
      {' '} { todo.title }
      <button onClick={() => remove(todo.id)} style={btnStyle}>x</button>
      </p>
    </div>
  );
};

export default TodoItem
