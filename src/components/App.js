import { useState } from "react";

import "./style.scss";
import { List } from "./List";

function App() {
  
  const [list, setList] = useState([]);
  const [newItem, setNewItem] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  
  const addNewItem = () => {
    if (newItem.length <= 0) {
      alert('Add a todo!');
      return;
    };
    setList(oldlist => [...oldlist, newItem]);
    setNewItem("");
  };
  
  
  const deleteItem = (index) => {
    setList(list => list.filter((_, i) => i !== index))  
  };
  
  return (
    <div className="App">
      <div className="container">
        <h1>Todo list</h1>
        <form onSubmit={handleSubmit}>
          <input value={newItem} type="text" onChange={event => setNewItem(event.target.value)} placeholder="Add a todo" />
          <button className="add" onClick={addNewItem}>
            <p>+</p>
          </button>
        </form>
        <List listDiv={list} deleteItem={deleteItem} />
      </div>
    </div>
  );
  
};

export default App;