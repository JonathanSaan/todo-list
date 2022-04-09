import { useState } from "react";
import dataList from "../mocks/dataList"


import "./style.scss";
import { List } from "./List";

function App() {
  
  const dados = (event) => {
    //const [value, setValue] = useState();
    console.log(event.target.value)
  }
  
  return (
    <div className="App">
      <div>
        <h1>Todo list</h1>
        <input type="text" onChange={dados} />
        <button className="add">
          <p>+</p>
        </button>
        <List listDiv={dataList}/>
      </div>
    </div>
  );
}

export default App;
