import { useTodosContext } from "../../contexts/todosContext";
import styles from './styles.module.css';

const ToDo = ({todo, i}) => { 

 const {changeStatus, deleteToDo} = useTodosContext()

  return (
    
    <li className='list-group-item d-flex align-items-center justify-content-between'>
    <span className={todo.status ? styles.done : ''}>{i+1}. {todo.inp}</span>    
    <div>
    <button type="button" onClick={() => changeStatus(todo.id)} className={`btn btn-${todo.status ? 'secondary' : 'warning'} mx-1`}>{todo.status ? 'Не сделано' : 'Сделано'}</button>
    <button type="button" onClick={() => deleteToDo(todo.id)} className="btn btn-info">Удалить</button>
    </div>
    </li>
    
  )
  }
export default ToDo;

