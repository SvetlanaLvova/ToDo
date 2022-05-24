import { useState } from 'react';
import { useTodosContext } from '../../contexts/todosContext';

function Header() {

  const [input, setInput] = useState('')

  const {addNewTodo} = useTodosContext()

   const submitHander = (e) => { 
     e.preventDefault();    
     addNewTodo(input) 
     setInput('')
    }   


  return(
   <>
      <header>
        <form onSubmit={submitHander} className="d-flex flex-column align-items-center">
           <div className="mb-3">   
             <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="type here..." className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
               </div>  
             <button type="submit" className="btn btn-primary">Submit</button>
         </form>
      </header>
      <hr />
    </>
  )
}

export default Header;




