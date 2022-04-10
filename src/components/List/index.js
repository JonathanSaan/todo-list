import { BsFillTrashFill } from "react-icons/bs";

export function List({ listDiv, deleteItem }) {
      
  return (
      listDiv.map((list,index) => 
        <div className="todo-list" key={`list-item-${index}`}>
          <input type="checkbox" className="todo-list--checkbox"/>
          <p className="todo-list--description">{list}</p>
          <button className="todo-list--button-remove" onClick={() => deleteItem(index)}>
              <BsFillTrashFill size={17} color="black" />
          </button>
        </div>
      )
  );
    
};