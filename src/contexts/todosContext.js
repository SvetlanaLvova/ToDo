import { createContext, useContext } from "react";
import useLocalStorage from "../custom/useLocalStorage";

const TodosContext = createContext()

function TodosContextProvider({children}){

  const [todos, setTodos] = useLocalStorage([], 'todos')
  
  
  const addNewTodo = (inp) => {
    setTodos(prev => [...prev, { //prev это todos
      id: Date.now(),
      inp,
      status: false,
    }])
  }
  
  const changeStatus = (id) => {
    setTodos(prev => prev.map(todo => { //prev это todos
      if(todo.id === id) {                                               
        return {...todo, status: !todo.status}
      }
      return todo
    }))
  }

 
  const deleteToDo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }
  
  const deleteAllToDo = () => {
    setTodos([])
  }


  return(
    <TodosContext.Provider value={{todos, addNewTodo, changeStatus, deleteToDo, deleteAllToDo}}>
      {children}
    </TodosContext.Provider>
  )
}

export default TodosContextProvider;

export const useTodosContext = () => useContext(TodosContext) 
// вернет {todos, addNewTodo, changeStatus, deleteToDo, deleteAllToDo}
export { TodosContext }
