import { useState } from "react";

import "./style.scss";
import { List } from "./List";

function App() {
  
  const [lista, setLista] = useState([]);
  const [novoItem, setNovoItem] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  
  const addNewItem = () => {
    if (novoItem.length <= 0) {
      alert('Add a todo!');
      return;
    };
    setLista((oldLista) => ([...oldLista, novoItem]));
    setNovoItem("");
  };
  
  const deleteItem = (index) => {
    const tmpArray = [...lista];
    tmpArray.splice(index, 1);
    setLista(tmpArray);
  };
  
  return (
    <div className="App">
      <div className="container">
        <h1 className="todo-title">Todo list</h1>
        <form onSubmit={handleSubmit}>
          <input 
            value={novoItem} 
            className="todo--input-text"
            type="text" 
            onChange={event => setNovoItem(event.target.value)} 
            placeholder="Add a todo" 
          />
          <button className="todo--button-add" onClick={addNewItem}>
            <p>+</p>
          </button>
        </form>
        <List listDiv={lista} deleteItem={deleteItem} />
      </div>
    </div>
  );
  
};

export default App;