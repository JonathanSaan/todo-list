import { BsFillTrashFill } from "react-icons/bs";

export function List({ listDiv, deleteItem }) {
      
  return (
      listDiv.map((list,index) => 
        <div className="list">
          <input type="checkbox"/>
          <p>{list}</p>
          <button className="trash" onClick={() => deleteItem(index)}>
              <BsFillTrashFill size={17} color="black" />
          </button>
        </div>
      )
  );
    
};