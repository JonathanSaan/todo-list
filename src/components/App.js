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
    setLista(oldlista => [...oldlista, novoItem]);
    setNovoItem("");
  };
  
  
  const deleteItem = (index) => {
    setLista(lista => lista.filter((_, i) => i !== index))  
  };
  
  return (
    <div className="App">
      <div className="container">
        <h1>Todo list</h1>
        <form onSubmit={handleSubmit}>
          <input value={novoItem} type="text" onChange={event => setNovoItem(event.target.value)} placeholder="Add a todo" />
          <button className="add" onClick={addNewItem}>
            <p>+</p>
          </button>
        </form>
        <List listDiv={lista} deleteItem={deleteItem} />
      </div>
    </div>
  );
  
};

export default App;