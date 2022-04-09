import { BsFillTrashFill } from "react-icons/bs";

export function List({ listDiv }) {
      
  return (
    <>
      {listDiv.length > 0 ? (
        listDiv.map((list) => 
          <div className="list">
            <input type="checkbox"/>
            <p>{list.dado} </p>
            <button className="trash">
                <BsFillTrashFill size={17} color="black" />
            </button>
          </div>)
        ) : (
          alert('adicione')
      )}
  </>
  )
    
}