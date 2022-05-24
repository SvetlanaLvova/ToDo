import { useTodosContext } from "../../contexts/todosContext";
import ToDo from "../ToDo/ToDo";

function ToDoList(){ 
  const {todos} = useTodosContext()

  return(
    <ul className="list-group">
     {todos.map((todo, i) => <ToDo key={todo.id} todo={todo} i={i} />)}
    </ul>

  )
}
export default ToDoList;

