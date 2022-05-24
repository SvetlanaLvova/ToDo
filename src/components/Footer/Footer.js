import { useTodosContext } from "../../contexts/todosContext";
import React from "react"
import {Link} from 'react-router-dom';

const Footer = () => {

  const {deleteAllToDo} = useTodosContext()

  return(
    <>
    <div className="d-flex flex-column align-items-center">
    <button type="button" onClick={deleteAllToDo} className="btn btn-danger mt-2">Clear All</button>
    </div>
   </>
  )
}

export default React.memo(Footer)

//React.memo - компонент рендерится только если изменение в Footer



